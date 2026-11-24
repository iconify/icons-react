import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssvqhfy1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssvqhfy1l"/>`,
		"fallback": "lucide-extended:scratch-blocks-filled",
	});
}

export default Component;
