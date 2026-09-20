import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy7fz0b3h.css';
import '../../css/s/snw44201m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy7fz0b3h"/><path class="snw44201m"/>`,
		"fallback": "streamline-ultimate:smart-toilet-bold",
	});
}

export default Component;
