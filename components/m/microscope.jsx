import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_6kj7x5d.css';
import '../../css/t/tfcedsrrx.css';
import '../../css/x/xiuuvjbrv.css';
import '../../css/z/z3pcmeson.css';
import '../../css/o/og2o9yleg.css';
import '../../css/l/llbpgybel.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_6kj7x5d"/><path clip-rule="evenodd" class="tfcedsrrx"/><path class="xiuuvjbrv"/><path class="z3pcmeson"/><path class="og2o9yleg"/><path clip-rule="evenodd" class="llbpgybel"/></g>`,
		"fallback": "glyphs-poly:microscope",
	});
}

export default Component;
