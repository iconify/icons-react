import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lm0y67cgx.css';
import '../../css/w/wvor-jbep.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lm0y67cgx"/><path class="wvor-jbep"/></g>`,
		"fallback": "fad:sliderhandle-2",
	});
}

export default Component;
