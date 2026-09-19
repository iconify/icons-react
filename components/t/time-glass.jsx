import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jdkzrmbaf.css';
import '../../css/j/jbqa_1dbz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jdkzrmbaf"/><path class="jbqa_1dbz"/></g>`,
		"fallback": "si-glyph:time-glass",
	});
}

export default Component;
