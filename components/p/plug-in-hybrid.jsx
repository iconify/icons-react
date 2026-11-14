import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5o37lmcf.css';
import '../../css/f/fl825d_-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v5o37lmcf"/><path class="fl825d_-i"/></g>`,
		"fallback": "evicons:plug-in-hybrid",
	});
}

export default Component;
