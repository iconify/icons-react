import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz8on2utd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz8on2utd"/>`,
		"fallback": "mynaui:volume-check",
	});
}

export default Component;
