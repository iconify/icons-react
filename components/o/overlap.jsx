import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqrzlbb5j.css';
import '../../css/z/zh0ihf3kg.css';
import '../../css/m/m4desqzmm.css';
import '../../css/a/avr--i-3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqrzlbb5j"/><path class="zh0ihf3kg"/><path class="m4desqzmm"/><path class="avr--i-3c"/>`,
		"fallback": "fxemoji:overlap",
	});
}

export default Component;
