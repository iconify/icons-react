import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flxjj8bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flxjj8bgf primary"/>`,
		"fallback": "iconaut:shield-off-duotone",
	});
}

export default Component;
