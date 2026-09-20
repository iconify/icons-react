import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af786g-gs.css';
import '../../css/t/tf51z5b-b.css';
import '../../css/e/e5y3liomb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af786g-gs"/><path class="tf51z5b-b"/><path class="e5y3liomb"/>`,
		"fallback": "token:rgen",
	});
}

export default Component;
