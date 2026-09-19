import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_e83v4za.css';

const viewBox = {"width":1152,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_e83v4za"/>`,
		"fallback": "vs:p",
	});
}

export default Component;
