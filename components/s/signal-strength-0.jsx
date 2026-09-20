import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkr1c6dyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkr1c6dyr"/>`,
		"fallback": "ix:signal-strength-0",
	});
}

export default Component;
