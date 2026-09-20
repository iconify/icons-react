import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v19gj253m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v19gj253m"/>`,
		"fallback": "picon:on",
	});
}

export default Component;
