import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdhe4sbui.css';
import '../../css/x/xv7by3x_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdhe4sbui"/><path class="xv7by3x_x"/>`,
		"fallback": "solar:skip-next-bold",
	});
}

export default Component;
