import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap9k2cboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap9k2cboo"/>`,
		"fallback": "flowbite:person-chalkboard-outline",
	});
}

export default Component;
