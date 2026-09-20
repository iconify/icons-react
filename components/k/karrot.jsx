import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts8chuoof.css';
import '../../css/h/hqufffsil.css';
import '../../css/v/ves5g3ble.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts8chuoof"/><path class="hqufffsil"/><path class="ves5g3ble"/>`,
		"fallback": "selfhst:karrot",
	});
}

export default Component;
