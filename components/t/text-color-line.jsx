import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd5zuubcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd5zuubcl"/>`,
		"fallback": "mingcute:text-color-line",
	});
}

export default Component;
