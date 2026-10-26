import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt_lpuqei.css';

const viewBox = {"width":1510,"height":1515};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt_lpuqei"/>`,
		"fallback": "thesvg:pnj",
	});
}

export default Component;
