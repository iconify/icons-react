import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofzf_qwrd.css';
import '../../css/i/i-nadtq-k.css';
import '../../css/f/fd8p9ibgw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ofzf_qwrd"/><path clip-rule="evenodd" class="i-nadtq-k"/><path class="fd8p9ibgw"/></g>`,
		"fallback": "glyphs-poly:tennis-ball",
	});
}

export default Component;
