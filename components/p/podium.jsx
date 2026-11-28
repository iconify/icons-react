import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7a_usb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7a_usb4j"/>`,
		"fallback": "noviair:podium",
	});
}

export default Component;
