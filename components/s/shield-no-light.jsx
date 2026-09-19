import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh38m3ble.css';
import '../../css/f/f5td6xros.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lh38m3ble"/><path class="f5td6xros"/></g>`,
		"fallback": "iconamoon:shield-no-light",
	});
}

export default Component;
