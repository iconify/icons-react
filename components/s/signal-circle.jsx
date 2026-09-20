import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl297vo_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wl297vo_d"/>`,
		"fallback": "reicon:signal-circle",
	});
}

export default Component;
