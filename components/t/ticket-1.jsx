import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-bbrwb_q.css';
import '../../css/e/ee2q5l8xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v-bbrwb_q"/><path class="ee2q5l8xi"/></g>`,
		"fallback": "streamline-ultimate:ticket-1",
	});
}

export default Component;
