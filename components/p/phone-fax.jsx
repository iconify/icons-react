import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yhob_-lpw.css';
import '../../css/c/cx8pjrbkk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yhob_-lpw"/><path class="cx8pjrbkk"/></g>`,
		"fallback": "si-glyph:phone-fax",
	});
}

export default Component;
