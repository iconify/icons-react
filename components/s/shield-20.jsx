import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1l2syb5g.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/u/uw28vhb1n.css';
import '../../css/f/fn0mbo18z.css';
import '../../css/g/gsug0sx0f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGtolbUdhw)" class="o1l2syb5g"/><defs><radialGradient id="SVGtolbUdhw" cx="0" cy="0" r="1" gradientTransform="matrix(21.50002 31 -27.12496 18.81249 -2.5 -7)" gradientUnits="userSpaceOnUse"><stop offset=".338" class="ol7cejbxg"/><stop offset=".529" class="uw28vhb1n"/><stop offset=".682" class="fn0mbo18z"/><stop offset=".861" class="gsug0sx0f"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:shield-20",
	});
}

export default Component;
