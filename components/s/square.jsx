import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_f83bmeh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_f83bmeh"/>`,
		"fallback": "gis:square",
	});
}

export default Component;
