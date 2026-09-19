import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/weu0f1tnv.css';
import '../../css/k/k4bxl8bfh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="weu0f1tnv"/><path class="k4bxl8bfh"/></g>`,
		"fallback": "si-glyph:motobike",
	});
}

export default Component;
