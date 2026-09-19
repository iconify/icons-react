import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcjleqbuo.css';
import '../../css/m/mbp5jpbcb.css';
import '../../css/n/n9dq_s7zi.css';
import '../../css/z/z-10p7bqm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qcjleqbuo"/><path clip-rule="evenodd" class="mbp5jpbcb"/><path class="n9dq_s7zi"/><path clip-rule="evenodd" class="z-10p7bqm"/></g>`,
		"fallback": "glyphs:laptop-cli-outline",
	});
}

export default Component;
