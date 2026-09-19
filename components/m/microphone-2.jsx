import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qe7ab_bae.css';
import '../../css/w/w78shdcew.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qe7ab_bae"/><path class="w78shdcew"/></g>`,
		"fallback": "si-glyph:microphone-2",
	});
}

export default Component;
