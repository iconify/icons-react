import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhmy8t9ji.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhmy8t9ji"/>`,
		"fallback": "cib:sega",
	});
}

export default Component;
