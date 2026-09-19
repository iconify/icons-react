import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwbn2m-gm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwbn2m-gm"/>`,
		"fallback": "fa6-solid:sign-hanging",
	});
}

export default Component;
