import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c4g5s3b0b.css';
import '../../css/h/hqu_4kbua.css';
import '../../css/q/qsf_4h99k.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 1)" class="n1lsf0bnc"><circle class="c4g5s3b0b"/><path class="hqu_4kbua"/><path class="qsf_4h99k"/></g>`,
		"fallback": "si-glyph:retroeexcavadora",
	});
}

export default Component;
