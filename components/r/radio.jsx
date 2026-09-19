import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wff3039xb.css';

const viewBox = {"width":432,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wff3039xb"/>`,
		"fallback": "zmdi:radio",
	});
}

export default Component;
