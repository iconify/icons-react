import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/si22bkotj.css';
import '../../css/j/jdwc3aclm.css';
import '../../css/a/a16ksebqi.css';
import '../../css/h/htbmnrb-j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="si22bkotj"/><path class="jdwc3aclm"/><path class="a16ksebqi"/><path class="htbmnrb-j"/></g>`,
		"fallback": "glyphs-poly:sim-card",
	});
}

export default Component;
