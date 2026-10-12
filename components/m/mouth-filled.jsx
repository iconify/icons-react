import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj690b9-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj690b9-z"/>`,
		"fallback": "lucide-extended:mouth-filled",
	});
}

export default Component;
