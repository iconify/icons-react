import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itjds7n3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itjds7n3u"/>`,
		"fallback": "selfhst:linuxgsm-dark",
	});
}

export default Component;
