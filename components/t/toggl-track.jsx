import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcgdu8hot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcgdu8hot"/>`,
		"fallback": "thesvg-color:toggl-track",
	});
}

export default Component;
