import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d52fowc3l.css';
import '../../css/c/cx5wglyau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d52fowc3l"/><path class="cx5wglyau"/></g>`,
		"fallback": "hugeicons:self-transfer",
	});
}

export default Component;
