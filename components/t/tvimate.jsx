import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp8_cib3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp8_cib3r"/>`,
		"fallback": "cbi:tvimate",
	});
}

export default Component;
