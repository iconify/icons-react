import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw5-nd-eu.css';
import '../../css/p/pegc-mbyz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw5-nd-eu"/><path class="pegc-mbyz"/>`,
		"fallback": "energy-icons:pill-bottle-20-bold",
	});
}

export default Component;
