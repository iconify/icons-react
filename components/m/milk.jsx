import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u_rs-acqu.css';
import '../../css/k/khj2usbjr.css';
import '../../css/o/on4uw4-gq.css';
import '../../css/c/cg83aj1vp.css';
import '../../css/m/maz6_ac-q.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u_rs-acqu"/><path class="khj2usbjr"/><path class="on4uw4-gq wm-shine"/><path class="cg83aj1vp wm-k"/><path class="maz6_ac-q wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:milk",
	});
}

export default Component;
