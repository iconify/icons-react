import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hwek3dbzr.css';
import '../../css/s/sbo31-buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hwek3dbzr"/><path class="sbo31-buv"/></g>`,
		"fallback": "streamline-ultimate:show-theater-masks",
	});
}

export default Component;
