import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwa1c4o_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwa1c4o_z"/>`,
		"fallback": "hugeicons:plus-minus-01",
	});
}

export default Component;
