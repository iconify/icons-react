import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adh2_0ble.css';
import '../../css/y/y0igkftrk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adh2_0ble"/><path class="y0igkftrk"/>`,
		"fallback": "openmoji:right-arrow-curving-left",
	});
}

export default Component;
