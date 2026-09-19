import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4aa7243d.css';
import '../../css/g/g3of2v_xa.css';
import '../../css/s/s9btb0zqv.css';
import '../../css/z/z0dvjiblq.css';
import '../../css/q/q405hrbkr.css';
import '../../css/s/sw4behbkd.css';
import '../../css/z/z2epv61lw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o4aa7243d"/><path clip-rule="evenodd" class="g3of2v_xa"/><path class="s9btb0zqv"/><path class="z0dvjiblq"/><path clip-rule="evenodd" class="q405hrbkr"/><path class="sw4behbkd"/><path class="z2epv61lw"/></g>`,
		"fallback": "glyphs-poly:truck",
	});
}

export default Component;
