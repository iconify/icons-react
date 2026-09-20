import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeju42bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeju42bkm"/>`,
		"fallback": "uil:location-arrow",
	});
}

export default Component;
