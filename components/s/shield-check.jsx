import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/stg8vbb-s.css';
import '../../css/k/k4r9adc5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="stg8vbb-s"/><path class="k4r9adc5a"/></g>`,
		"fallback": "doodle-icons:shield-check",
	});
}

export default Component;
