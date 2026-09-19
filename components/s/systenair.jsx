import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ont9fwm1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ont9fwm1a"/>`,
		"fallback": "cbi:systenair",
	});
}

export default Component;
