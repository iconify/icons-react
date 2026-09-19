import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cf1ck1bwx.css';
import '../../css/r/rjaicdbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cf1ck1bwx"/><path class="rjaicdbgc"/></g>`,
		"fallback": "hugeicons:seat-selector",
	});
}

export default Component;
