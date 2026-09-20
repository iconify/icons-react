import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/d/dkm83ti7t.css';
import '../../css/m/mshypxbic.css';
import '../../css/m/mnetjirfi.css';
import '../../css/n/nkp8_pi9d.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yo-vj5bpg.css';
import '../../css/f/fzoqqybrc.css';
import '../../css/f/f60g1db0z.css';
import '../../css/d/dklo8acog.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="dkm83ti7t"/><circle class="mshypxbic"/><circle class="mnetjirfi"/><path class="nkp8_pi9d"/></g><g class="ij2x_72vy"><path class="yo-vj5bpg"/><circle class="fzoqqybrc"/><circle class="f60g1db0z"/><path class="dklo8acog"/></g>`,
		"fallback": "openmoji:shopping-cart",
	});
}

export default Component;
