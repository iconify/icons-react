import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vy2hwnsrh.css';
import '../../css/f/fafxr0rtw.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vy2hwnsrh"/><path class="fafxr0rtw"/></g>`,
		"fallback": "si-glyph:rugby-ball",
	});
}

export default Component;
