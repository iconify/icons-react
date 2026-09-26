import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/duudpwbrb.css';
import '../../css/h/h0krthb9p.css';
import '../../css/x/xdk9_oksp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="duudpwbrb"/><path class="h0krthb9p"/><path class="xdk9_oksp"/></g>`,
		"fallback": "solar:separator-horizontal-linear",
	});
}

export default Component;
