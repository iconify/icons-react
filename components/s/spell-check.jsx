import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mib7gib8l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mib7gib8l"/>`,
		"fallback": "la:spell-check",
	});
}

export default Component;
