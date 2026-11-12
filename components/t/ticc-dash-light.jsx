import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrt0s6edx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrt0s6edx"/>`,
		"fallback": "selfhst:ticc-dash-light",
	});
}

export default Component;
