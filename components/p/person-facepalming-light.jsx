import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xag1dhbsb.css';
import '../../css/i/i_gf7_bgu.css';
import '../../css/f/feo45k8_k.css';
import '../../css/v/vorejb6wi.css';
import '../../css/h/hk23hj1lu.css';
import '../../css/n/nmx-7q8uv.css';
import '../../css/e/ebhrmd7xa.css';
import '../../css/t/t4tjgrhau.css';
import '../../css/f/f2egsuujx.css';
import '../../css/u/ukliithkn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xag1dhbsb"/><path class="i_gf7_bgu"/><path class="feo45k8_k"/><path class="vorejb6wi"/><path class="hk23hj1lu"/><path class="nmx-7q8uv"/><path class="ebhrmd7xa"/><path class="t4tjgrhau"/><path class="f2egsuujx"/><path class="ukliithkn"/></g>`,
		"fallback": "fluent-emoji-flat:person-facepalming-light",
	});
}

export default Component;
