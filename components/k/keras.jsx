import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu1-mcc0m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu1-mcc0m"/>`,
		"fallback": "cib:keras",
	});
}

export default Component;
