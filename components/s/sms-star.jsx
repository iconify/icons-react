import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ikibw8b0n.css';
import '../../css/h/hkp0csiud.css';
import '../../css/k/kvz_424cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ikibw8b0n"/><path class="hkp0csiud"/><path class="kvz_424cx"/></g>`,
		"fallback": "reicon:sms-star",
	});
}

export default Component;
