import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4va6x1fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4va6x1fs"/>`,
		"fallback": "griddy-icons:smoke-free",
	});
}

export default Component;
