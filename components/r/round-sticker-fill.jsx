import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yur0lzbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yur0lzbgn"/>`,
		"fallback": "mage:round-sticker-fill",
	});
}

export default Component;
