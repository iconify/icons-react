import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0yadyb6s.css';
import '../../css/e/exi6ngb_x.css';
import '../../css/b/b5xo1-bip.css';
import '../../css/a/awuj-cb0n.css';
import '../../css/u/unfm2i8_c.css';
import '../../css/e/ede8c3bnq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0yadyb6s"/><path clip-rule="evenodd" class="exi6ngb_x"/><path clip-rule="evenodd" class="b5xo1-bip"/><path class="awuj-cb0n"/><path clip-rule="evenodd" class="unfm2i8_c"/><path clip-rule="evenodd" class="ede8c3bnq"/></g>`,
		"fallback": "glyphs:light-switch-outline",
	});
}

export default Component;
