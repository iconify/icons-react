import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fi7vqwb0l.css';
import '../../css/h/h3lgm2bjn.css';
import '../../css/a/a0rpx6b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fi7vqwb0l"/><path class="h3lgm2bjn"/><path class="a0rpx6b-s"/></g>`,
		"fallback": "hugeicons:wallet-01",
	});
}

export default Component;
