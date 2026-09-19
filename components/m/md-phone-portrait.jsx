import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh384qk4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh384qk4l"/>`,
		"fallback": "ion:md-phone-portrait",
	});
}

export default Component;
