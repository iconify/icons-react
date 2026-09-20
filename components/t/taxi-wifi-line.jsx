import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy11gn_xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy11gn_xc"/>`,
		"fallback": "ri:taxi-wifi-line",
	});
}

export default Component;
