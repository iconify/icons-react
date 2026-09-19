import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7-m3femq.css';
import '../../css/k/knin50p_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y7-m3femq"/><circle class="knin50p_y"/></g>`,
		"fallback": "hugeicons:user-cog",
	});
}

export default Component;
