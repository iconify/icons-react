import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ms-0oib8e.css';
import '../../css/e/evpbj2bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ms-0oib8e"/><path class="evpbj2bjr"/></g>`,
		"fallback": "evicons:power-outage",
	});
}

export default Component;
