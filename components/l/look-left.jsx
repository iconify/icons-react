import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qznxftb5v.css';
import '../../css/d/d9csct9ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qznxftb5v"/><path class="d9csct9ur"/></g>`,
		"fallback": "hugeicons:look-left",
	});
}

export default Component;
