import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqfbhvbmn.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqfbhvbmn"/>`,
		"fallback": "fa-solid:snowflake",
	});
}

export default Component;
