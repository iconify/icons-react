import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdxj_ebso.css';
import '../../css/y/y5f59ibhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cdxj_ebso"/><path class="y5f59ibhm"/></g>`,
		"fallback": "covid:transmission-virus-visible",
	});
}

export default Component;
