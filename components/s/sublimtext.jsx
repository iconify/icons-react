import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlyur0l4y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlyur0l4y"/>`,
		"fallback": "picon:sublimtext",
	});
}

export default Component;
