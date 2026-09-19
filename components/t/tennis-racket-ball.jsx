import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cweuz1bja.css';
import '../../css/v/v1rs_9bxj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><circle class="cweuz1bja"/><path class="v1rs_9bxj"/></g>`,
		"fallback": "si-glyph:tennis-racket-ball",
	});
}

export default Component;
