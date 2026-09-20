import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m5m2q5-zc.css';
import '../../css/c/cpglq24vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="m5m2q5-zc"/><path class="cpglq24vf"/></g>`,
		"fallback": "lets-icons:order-light",
	});
}

export default Component;
