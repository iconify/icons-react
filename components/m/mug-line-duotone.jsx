import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/njf5snbwf.css';
import '../../css/t/tfgra3ble.css';
import '../../css/w/w4m4eeb0m.css';
import '../../css/f/fd7_frbmd.css';
import '../../css/b/b8muav1zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="njf5snbwf"/><path class="tfgra3ble"/><path class="w4m4eeb0m"/><path class="fd7_frbmd"/><path class="b8muav1zi"/></g>`,
		"fallback": "solar:mug-line-duotone",
	});
}

export default Component;
