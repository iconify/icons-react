import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifi4wh1fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ifi4wh1fy"/>`,
		"fallback": "iconamoon:sign-times-circle-fill",
	});
}

export default Component;
