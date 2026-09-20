import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/glhe58bhw.css';
import '../../css/h/hazht06kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="glhe58bhw"/><path class="hazht06kc"/></g>`,
		"fallback": "mage:l-arrow-right-up",
	});
}

export default Component;
