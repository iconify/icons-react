import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqa9ondhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqa9ondhb"/>`,
		"fallback": "boxicons:vr-headset-filled",
	});
}

export default Component;
