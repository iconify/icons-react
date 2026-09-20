import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yqjipifpm.css';
import '../../css/b/bmpvgbieq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yqjipifpm"/><path class="bmpvgbieq"/></g>`,
		"fallback": "streamline-ultimate:number-five-square",
	});
}

export default Component;
