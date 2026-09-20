import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbce_z4al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbce_z4al"/>`,
		"fallback": "ri:mail-lock-line",
	});
}

export default Component;
