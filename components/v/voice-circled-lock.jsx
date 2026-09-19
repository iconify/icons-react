import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w1_yo30pq.css';
import '../../css/h/hhj58fbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w1_yo30pq"/><path class="hhj58fbib"/></g>`,
		"fallback": "iconoir:voice-circled-lock",
	});
}

export default Component;
