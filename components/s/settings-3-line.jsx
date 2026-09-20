import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvec1l3uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvec1l3uw"/>`,
		"fallback": "ri:settings-3-line",
	});
}

export default Component;
