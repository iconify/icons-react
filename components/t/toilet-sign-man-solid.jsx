import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr42wnp1t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sr42wnp1t"/>`,
		"fallback": "streamline-flex:toilet-sign-man-solid",
	});
}

export default Component;
