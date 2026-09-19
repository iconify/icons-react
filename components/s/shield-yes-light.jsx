import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh38m3ble.css';
import '../../css/s/s589v528v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lh38m3ble"/><path class="s589v528v"/></g>`,
		"fallback": "iconamoon:shield-yes-light",
	});
}

export default Component;
