import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsnbwd4wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsnbwd4wt"/>`,
		"fallback": "pixelarticons:message-arrow-right",
	});
}

export default Component;
