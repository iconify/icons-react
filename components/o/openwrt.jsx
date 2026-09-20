import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feujp6_ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feujp6_ax"/>`,
		"fallback": "thesvg:openwrt",
	});
}

export default Component;
