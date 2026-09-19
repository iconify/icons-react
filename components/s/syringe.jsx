import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb1m19bkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb1m19bkr"/>`,
		"fallback": "fa6-solid:syringe",
	});
}

export default Component;
