import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1mhdw-bn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1mhdw-bn"/>`,
		"fallback": "selfhst:jupyter-light",
	});
}

export default Component;
