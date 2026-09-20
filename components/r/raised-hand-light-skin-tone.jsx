import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri6lrnb_l.css';
import '../../css/i/ibxo5zbky.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri6lrnb_l"/><path class="ibxo5zbky"/>`,
		"fallback": "openmoji:raised-hand-light-skin-tone",
	});
}

export default Component;
