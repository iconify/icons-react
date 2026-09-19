import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu3v6tmeh.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu3v6tmeh"/>`,
		"fallback": "fa-solid:male",
	});
}

export default Component;
