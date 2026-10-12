import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8v5izblz.css';
import '../../css/e/e_y__bbjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8v5izblz"/><path class="e_y__bbjx"/>`,
		"fallback": "energy-icons:plunger-48-bold",
	});
}

export default Component;
