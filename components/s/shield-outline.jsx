import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otpvh6y5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="shield-outline"><path class="(Stroke) 69 Vector otpvh6y5u" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:shield-outline",
	});
}

export default Component;
