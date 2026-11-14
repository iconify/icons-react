import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bt4xg4ftq.css';
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
		"content": `<g class="hntgybcog"><path class="bt4xg4ftq"/><path class="h3lgm2bjn"/><path class="a0rpx6b-s"/></g>`,
		"fallback": "hugeicons:wallet-01",
	});
}

export default Component;
