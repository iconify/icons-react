import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dp5_d14ec.css';
import '../../css/i/i602ejj_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dp5_d14ec"/><path class="i602ejj_w"/></g>`,
		"fallback": "iconoir:temperature-up",
	});
}

export default Component;
