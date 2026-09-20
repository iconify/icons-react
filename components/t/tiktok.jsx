import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiv8dcbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiv8dcbcp"/>`,
		"fallback": "pixel:tiktok",
	});
}

export default Component;
