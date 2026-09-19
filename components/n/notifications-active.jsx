import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yilqdacnq.css';

const viewBox = {"width":448,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yilqdacnq"/>`,
		"fallback": "zmdi:notifications-active",
	});
}

export default Component;
