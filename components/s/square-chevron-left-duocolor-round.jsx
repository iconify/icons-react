import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qz9p6obim.css';
import '../../css/z/zxk7_zbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qz9p6obim"/><path class="zxk7_zbjo"/></g>`,
		"fallback": "coolicons:square-chevron-left-duocolor-round",
	});
}

export default Component;
