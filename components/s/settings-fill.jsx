import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6wz8cb3t.css';
import '../../css/w/wghzjz1_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t6wz8cb3t"/><path class="wghzjz1_r"/>`,
		"fallback": "eva:settings-fill",
	});
}

export default Component;
