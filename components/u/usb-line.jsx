import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvka3bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddvka3bld"/>`,
		"fallback": "mingcute:usb-line",
	});
}

export default Component;
