import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkpsd5cgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkpsd5cgd"/>`,
		"fallback": "mynaui:letter-h-hexagon",
	});
}

export default Component;
