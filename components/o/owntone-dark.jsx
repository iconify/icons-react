import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tun2-86it.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tun2-86it"/>`,
		"fallback": "selfhst:owntone-dark",
	});
}

export default Component;
