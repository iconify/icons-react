import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcz3qmqcf.css';
import '../../css/k/kqpank9js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gcz3qmqcf"/><path class="kqpank9js"/></g>`,
		"fallback": "reicon:user-tag",
	});
}

export default Component;
