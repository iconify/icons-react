import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0w6jgbzn.css';
import '../../css/m/mygbtuldy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g0w6jgbzn"/><path class="mygbtuldy"/></g>`,
		"fallback": "hugeicons:message-circle-check",
	});
}

export default Component;
