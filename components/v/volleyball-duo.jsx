import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kr3ck5bhl.css';
import '../../css/b/b41sgubvl.css';
import '../../css/j/jyezy1bma.css';
import '../../css/t/toczg3kyb.css';
import '../../css/b/bue5v0abp.css';
import '../../css/b/bm1m0ob_i.css';
import '../../css/h/hg0cgtb8l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kr3ck5bhl"/><path class="b41sgubvl"/><path class="jyezy1bma"/><path class="toczg3kyb"/><path class="bue5v0abp"/><path class="bm1m0ob_i"/><path class="hg0cgtb8l"/></g>`,
		"fallback": "glyphs:volleyball-duo",
	});
}

export default Component;
