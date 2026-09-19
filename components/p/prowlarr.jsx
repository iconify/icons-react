import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2mx4lulm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2mx4lulm"/>`,
		"fallback": "cbi:prowlarr",
	});
}

export default Component;
