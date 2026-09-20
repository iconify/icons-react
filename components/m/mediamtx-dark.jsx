import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx8_exglu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx8_exglu"/>`,
		"fallback": "selfhst:mediamtx-dark",
	});
}

export default Component;
