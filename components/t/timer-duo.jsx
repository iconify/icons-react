import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/it_b6ibho.css';
import '../../css/c/cwnti_bpv.css';
import '../../css/c/cup7wj97d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="it_b6ibho"/><path class="cwnti_bpv"/><path class="cup7wj97d"/></g>`,
		"fallback": "glyphs:timer-duo",
	});
}

export default Component;
