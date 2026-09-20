import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug4xqib1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug4xqib1d"/>`,
		"fallback": "weui:more2-outlined",
	});
}

export default Component;
