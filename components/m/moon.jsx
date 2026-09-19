import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_rj27bjx.css';

const viewBox = {"width":1472,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_rj27bjx"/>`,
		"fallback": "vs:moon",
	});
}

export default Component;
