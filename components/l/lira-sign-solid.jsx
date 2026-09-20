import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crw-psynl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crw-psynl"/>`,
		"fallback": "la:lira-sign-solid",
	});
}

export default Component;
