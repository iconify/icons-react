import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rqsxkhbqx.css';
import '../../css/m/mlzc_fbxq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rqsxkhbqx"/><path class="mlzc_fbxq"/></g>`,
		"fallback": "si-glyph:screen-ful",
	});
}

export default Component;
