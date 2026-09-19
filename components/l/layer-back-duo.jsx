import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhfh227px.css';
import '../../css/a/aer3z1bva.css';
import '../../css/v/vfhi0fapr.css';
import '../../css/k/kqfnxrbrd.css';
import '../../css/o/o0nhrwzxd.css';
import '../../css/g/gu801tbfl.css';
import '../../css/u/ucypoj0pz.css';
import '../../css/h/hw1aglekt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mhfh227px"/><path class="aer3z1bva"/><path class="vfhi0fapr"/><path class="kqfnxrbrd"/><path class="o0nhrwzxd"/><path class="gu801tbfl"/><path class="ucypoj0pz"/><path class="hw1aglekt"/></g>`,
		"fallback": "glyphs:layer-back-duo",
	});
}

export default Component;
