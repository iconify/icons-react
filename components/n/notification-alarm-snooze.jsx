import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sgi4xs3_p.css';
import '../../css/d/d3n761bnq.css';
import '../../css/j/joq9pbbzu.css';
import '../../css/v/vzm4uibjf.css';
import '../../css/p/pm8egwbwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="sgi4xs3_p"/><path class="d3n761bnq"/><path class="joq9pbbzu"/><path class="vzm4uibjf"/><path class="pm8egwbwr"/></g>`,
		"fallback": "streamline-plump-color:notification-alarm-snooze",
	});
}

export default Component;
