import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8l48i23l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8l48i23l"/>`,
		"fallback": "ix:network-device-play-filled",
	});
}

export default Component;
