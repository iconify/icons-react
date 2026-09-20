import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zi_u8flpp.css';
import '../../css/w/wdeubdkmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zi_u8flpp"/><path class="wdeubdkmd"/></g>`,
		"fallback": "reicon:medal4",
	});
}

export default Component;
