import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlk19pkqp.css';
import '../../css/w/wuha4vbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlk19pkqp"/><path class="wuha4vbyk"/>`,
		"fallback": "cbi:shahid",
	});
}

export default Component;
