import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ysxv9-t.css';
import '../../css/k/ktv_y0_2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5ysxv9-t"/><path class="ktv_y0_2c"/>`,
		"fallback": "energy-icons:tidal-barrage-48-bold",
	});
}

export default Component;
