import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qos7asb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qos7asb3o"/>`,
		"fallback": "simple-icons:skyrock",
	});
}

export default Component;
