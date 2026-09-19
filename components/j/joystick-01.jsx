import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n03bg7bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n03bg7bqt"/>`,
		"fallback": "hugeicons:joystick-01",
	});
}

export default Component;
