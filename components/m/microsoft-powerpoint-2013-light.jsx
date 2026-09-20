import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9vw_m5_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9vw_m5_x"/>`,
		"fallback": "selfhst:microsoft-powerpoint-2013-light",
	});
}

export default Component;
