import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ewf489byd.css';
import '../../css/y/yvt-5hbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ewf489byd"/><path class="yvt-5hbzo"/></g>`,
		"fallback": "streamline-ultimate:messages-bubble-text",
	});
}

export default Component;
