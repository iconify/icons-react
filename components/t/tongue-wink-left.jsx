import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m215jpbcr.css';
import '../../css/w/wpmxfxjrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m215jpbcr"/><path class="wpmxfxjrw"/></g>`,
		"fallback": "hugeicons:tongue-wink-left",
	});
}

export default Component;
