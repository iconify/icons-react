import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygt3p0bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygt3p0bdq"/>`,
		"fallback": "mdi:slope-uphill",
	});
}

export default Component;
