import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d716izb2y.css';
import '../../css/h/hgq_yhiaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d716izb2y"/><path class="hgq_yhiaf"/></g>`,
		"fallback": "mynaui:map-pin-snooze-inside",
	});
}

export default Component;
