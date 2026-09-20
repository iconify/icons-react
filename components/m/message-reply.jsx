import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncbm4olnp.css';
import '../../css/f/fc3w5rbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ncbm4olnp"/><path class="fc3w5rbsw"/></g>`,
		"fallback": "mynaui:message-reply",
	});
}

export default Component;
