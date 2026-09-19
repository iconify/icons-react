import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ces_7v8dp.css';
import '../../css/k/khz-3ib7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ces_7v8dp"/><path class="khz-3ib7b"/>`,
		"fallback": "famicons:logo-discord",
	});
}

export default Component;
