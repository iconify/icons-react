import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0xn476-p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0xn476-p"/>`,
		"fallback": "pinhead:utility-device-with-bolt",
	});
}

export default Component;
