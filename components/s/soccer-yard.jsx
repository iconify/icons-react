import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bgnwnnb7h.css';
import '../../css/e/e07xtbcor.css';
import '../../css/v/vw3vokb7j.css';
import '../../css/g/gcnjpdm8x.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bgnwnnb7h"/><path class="e07xtbcor"/><path class="vw3vokb7j"/><path class="gcnjpdm8x"/></g>`,
		"fallback": "si-glyph:soccer-yard",
	});
}

export default Component;
