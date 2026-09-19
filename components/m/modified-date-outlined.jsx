import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rym86fbok.css';
import '../../css/n/ni4bbebcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rym86fbok"/><path class="ni4bbebcm"/>`,
		"fallback": "eos-icons:modified-date-outlined",
	});
}

export default Component;
