import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3gqaxbhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z3gqaxbhe"/>`,
		"fallback": "ix:trend-flat-curve",
	});
}

export default Component;
