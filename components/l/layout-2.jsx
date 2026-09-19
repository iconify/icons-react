import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fir3l4bbe.css';
import '../../css/f/ftm8sv4vo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fir3l4bbe"/><path class="ftm8sv4vo"/></g>`,
		"fallback": "si-glyph:layout-2",
	});
}

export default Component;
