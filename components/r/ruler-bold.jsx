import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhwig8hxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhwig8hxd"/>`,
		"fallback": "solar:ruler-bold",
	});
}

export default Component;
