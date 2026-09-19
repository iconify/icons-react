import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rawn7f28d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rawn7f28d"/>`,
		"fallback": "boxicons:vr-headset",
	});
}

export default Component;
