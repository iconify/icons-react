import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmt5tot6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmt5tot6k"/>`,
		"fallback": "boxicons:volume",
	});
}

export default Component;
