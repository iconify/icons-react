import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m84t_4viq.css';
import '../../css/c/cc2xbzt4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m84t_4viq"/><path class="cc2xbzt4u"/></g>`,
		"fallback": "solar:refresh-linear",
	});
}

export default Component;
