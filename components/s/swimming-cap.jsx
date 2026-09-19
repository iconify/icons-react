import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/adc0nobix.css';
import '../../css/y/yxfi3h8at.css';
import '../../css/p/pxbmlybch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="adc0nobix"/><path class="yxfi3h8at"/><path class="pxbmlybch"/></g>`,
		"fallback": "hugeicons:swimming-cap",
	});
}

export default Component;
