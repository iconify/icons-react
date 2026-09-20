import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zj1wl4bya.css';
import '../../css/r/rn-2cioxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zj1wl4bya"/><path class="rn-2cioxv"/></g>`,
		"fallback": "streamline-ultimate:ticket-add",
	});
}

export default Component;
