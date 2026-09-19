import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b0goo17xh.css';
import '../../css/v/vkjubs_ik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b0goo17xh"/><path class="vkjubs_ik"/></g>`,
		"fallback": "icon-park-outline:two-triangles-two",
	});
}

export default Component;
