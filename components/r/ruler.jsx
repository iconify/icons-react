import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1-2btbhm.css';
import '../../css/h/hkl-kbbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1-2btbhm"/><path class="hkl-kbbsk"/>`,
		"fallback": "circum:ruler",
	});
}

export default Component;
