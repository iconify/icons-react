import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ewjz88bei.css';
import '../../css/x/xef9tt_eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ewjz88bei"/><path class="xef9tt_eb"/></g>`,
		"fallback": "covid:transmission-virus-rat-mouse",
	});
}

export default Component;
