import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sreiqgbgj.css';
import '../../css/z/zdr9p-voz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sreiqgbgj"/><path class="zdr9p-voz"/></g>`,
		"fallback": "hugeicons:timer-01",
	});
}

export default Component;
