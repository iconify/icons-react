import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahd-08pqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahd-08pqr"/>`,
		"fallback": "weui:previous2-outlined",
	});
}

export default Component;
