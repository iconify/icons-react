import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/leth6321y.css';
import '../../css/s/sx6aeq7ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="leth6321y"/><path class="sx6aeq7ul"/></g>`,
		"fallback": "streamline-ultimate:programming-browser-1",
	});
}

export default Component;
