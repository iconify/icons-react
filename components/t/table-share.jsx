import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swcm47b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swcm47b_m"/>`,
		"fallback": "mdi:table-share",
	});
}

export default Component;
