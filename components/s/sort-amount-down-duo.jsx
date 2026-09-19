import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f137qsdjv.css';
import '../../css/t/thia9lvtf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f137qsdjv"/><path class="thia9lvtf"/></g>`,
		"fallback": "glyphs:sort-amount-down-duo",
	});
}

export default Component;
