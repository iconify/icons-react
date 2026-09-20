import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir8d_s7hv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir8d_s7hv"/>`,
		"fallback": "picon:moon",
	});
}

export default Component;
