import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p-w3owbpc.css';
import '../../css/w/wk0yq0bkm.css';
import '../../css/e/eak60cb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p-w3owbpc"/><path class="wk0yq0bkm"/><path class="eak60cb8v"/></g>`,
		"fallback": "solar:star-fall-linear",
	});
}

export default Component;
