import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-wg3tu1u.css';
import '../../css/k/k3emyvgtw.css';
import '../../css/q/qqr2shsqc.css';
import '../../css/k/k02_vp_gl.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><g id="SVGwnr7MdtW" transform="translate(0 -36)"><g id="SVGNctyDdUX"><g id="SVGNWrCwbQG"><path id="SVGHSjIVdKP" class="d-wg3tu1u"/><use width="180" height="120" href="#SVGHSjIVdKP" transform="scale(-1 1)"/></g><use width="180" height="120" href="#SVGNWrCwbQG" transform="rotate(72)"/></g><use width="180" height="120" href="#SVGNWrCwbQG" transform="rotate(-72)"/><use width="180" height="120" href="#SVGNctyDdUX" transform="rotate(144)"/></g></defs><path class="k3emyvgtw"/><path class="qqr2shsqc"/><path class="k02_vp_gl"/><g id="SVGva4PPcNM" transform="matrix(4 0 0 4 320 336)"><g id="SVGfQVePbbm"><use width="180" height="120" href="#SVGwnr7MdtW" transform="rotate(10)"/><use width="180" height="120" href="#SVGwnr7MdtW" transform="rotate(30)"/></g><use width="180" height="120" href="#SVGfQVePbbm" transform="rotate(40)"/></g><use width="180" height="120" href="#SVGva4PPcNM" transform="rotate(-80 320 336)"/>`,
		"fallback": "flag:ve-4x3",
	});
}

export default Component;
