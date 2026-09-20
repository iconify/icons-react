import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i8fe58bnw.css';
import '../../css/z/zxuf1gbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i8fe58bnw"/><path class="zxuf1gbdu"/></g>`,
		"fallback": "streamline-ultimate:user-cash-scale",
	});
}

export default Component;
