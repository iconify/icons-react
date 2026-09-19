import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k22iu-b5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k22iu-b5v"/>`,
		"fallback": "game-icons:usb-key",
	});
}

export default Component;
