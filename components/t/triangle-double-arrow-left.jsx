import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hk1s8nqdm.css';
import '../../css/e/ejfxmz1gf.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hk1s8nqdm"/><path class="ejfxmz1gf"/></g>`,
		"fallback": "si-glyph:triangle-double-arrow-left",
	});
}

export default Component;
