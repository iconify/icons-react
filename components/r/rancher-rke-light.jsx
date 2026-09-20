import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu9tfg_yp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu9tfg_yp"/>`,
		"fallback": "selfhst:rancher-rke-light",
	});
}

export default Component;
