import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9ii-ei4d.css';
import '../../css/z/zjbcw_sez.css';
import '../../css/d/dwxkob-qm.css';
import '../../css/x/x_xxc0bcy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9ii-ei4d"/><path class="zjbcw_sez"/><path class="dwxkob-qm"/><path class="x_xxc0bcy"/></g>`,
		"fallback": "glyphs:star-and-crescent-duo",
	});
}

export default Component;
