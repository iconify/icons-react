import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/li5wm0lug.css';
import '../../css/y/yz97ix16s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="li5wm0lug"/><path class="yz97ix16s"/></g>`,
		"fallback": "streamline-ultimate:timer-10",
	});
}

export default Component;
