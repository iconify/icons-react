import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiq64yb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiq64yb-m"/>`,
		"fallback": "mdi:ios-share",
	});
}

export default Component;
