import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubyn_s8ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubyn_s8ik"/>`,
		"fallback": "ri:signal-wifi-fill",
	});
}

export default Component;
