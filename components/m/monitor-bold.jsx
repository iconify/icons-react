import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz52zxbce.css';
import '../../css/l/ld9e7wt3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz52zxbce"/><path class="ld9e7wt3b"/>`,
		"fallback": "solar:monitor-bold",
	});
}

export default Component;
