import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frj4bs8az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frj4bs8az"/>`,
		"fallback": "thesvg-color:openwrt",
	});
}

export default Component;
