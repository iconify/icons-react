import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h953ibrrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h953ibrrf"/>`,
		"fallback": "andrsrxn:text-underline",
	});
}

export default Component;
