import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikbmv_b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikbmv_b3e"/>`,
		"fallback": "cbi:reolink-510",
	});
}

export default Component;
