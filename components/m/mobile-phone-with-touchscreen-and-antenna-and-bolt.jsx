import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqsabwbwk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqsabwbwk"/>`,
		"fallback": "pinhead:mobile-phone-with-touchscreen-and-antenna-and-bolt",
	});
}

export default Component;
