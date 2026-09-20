import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ny779fbje.css';
import '../../css/r/rlvidybyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ny779fbje"/><path class="rlvidybyr"/></g>`,
		"fallback": "reicon:microphone3",
	});
}

export default Component;
