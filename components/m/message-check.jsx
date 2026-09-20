import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/myfkyn7da.css';
import '../../css/n/ncbm4olnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="myfkyn7da"/><path class="ncbm4olnp"/></g>`,
		"fallback": "mynaui:message-check",
	});
}

export default Component;
