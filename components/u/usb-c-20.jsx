import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7m3inbym.css';
import '../../css/c/cbgy24bmz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7m3inbym"/><path class="cbgy24bmz"/>`,
		"fallback": "energy-icons:usb-c-20",
	});
}

export default Component;
