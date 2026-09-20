import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utb9dqwgn.css';
import '../../css/m/mq3padcvo.css';
import '../../css/g/gpfk4wrwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utb9dqwgn"/><path class="mq3padcvo"/><path class="gpfk4wrwh"/>`,
		"fallback": "token:vlxpad",
	});
}

export default Component;
