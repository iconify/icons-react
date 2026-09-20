import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk8njw3yz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk8njw3yz"/>`,
		"fallback": "ix:network-device-filled",
	});
}

export default Component;
