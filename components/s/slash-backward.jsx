import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq-kp1o7e.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq-kp1o7e"/>`,
		"fallback": "system-uicons:slash-backward",
	});
}

export default Component;
