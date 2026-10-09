import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn88ezbzu.css';
import '../../css/q/qklumbcjc.css';
import '../../css/s/semobrtpr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn88ezbzu"/><path class="qklumbcjc"/><path class="semobrtpr"/>`,
		"fallback": "energy-icons:ship-48",
	});
}

export default Component;
