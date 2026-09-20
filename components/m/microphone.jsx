import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/runbfzsjp.css';
import '../../css/x/xprloubds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="runbfzsjp"/><path class="xprloubds"/></g>`,
		"fallback": "mynaui:microphone",
	});
}

export default Component;
