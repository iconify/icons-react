import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrher560o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrher560o"/>`,
		"fallback": "pixelarticons:list",
	});
}

export default Component;
