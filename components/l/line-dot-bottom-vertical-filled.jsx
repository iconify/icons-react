import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tseo9etza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tseo9etza"/>`,
		"fallback": "lucide-extended:line-dot-bottom-vertical-filled",
	});
}

export default Component;
