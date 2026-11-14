import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0e-esbbh.css';
import '../../css/g/g0lkk6boj.css';
import '../../css/g/g1tth5biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a0e-esbbh"/><path class="g0lkk6boj"/><path class="g1tth5biz"/></g>`,
		"fallback": "hugeicons:message-preview-01",
	});
}

export default Component;
