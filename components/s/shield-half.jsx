import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5fiz9wbv.css';
import '../../css/i/i2gtjkbwv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5fiz9wbv"/><path class="i2gtjkbwv"/>`,
		"fallback": "famicons:shield-half",
	});
}

export default Component;
