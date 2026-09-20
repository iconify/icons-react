import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh1qadn_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh1qadn_r"/>`,
		"fallback": "selfhst:karakeep-light",
	});
}

export default Component;
