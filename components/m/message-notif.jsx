import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rkx84-bxm.css';
import '../../css/g/g4f6fpu0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rkx84-bxm"/><path class="g4f6fpu0z"/></g>`,
		"fallback": "reicon:message-notif",
	});
}

export default Component;
