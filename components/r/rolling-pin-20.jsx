import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfsmapzzo.css';
import '../../css/v/vkz5pbbmr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfsmapzzo"/><path class="vkz5pbbmr"/>`,
		"fallback": "energy-icons:rolling-pin-20",
	});
}

export default Component;
