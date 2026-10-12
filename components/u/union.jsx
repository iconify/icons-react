import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtefwqb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtefwqb-h"/>`,
		"fallback": "andrsrxn:union",
	});
}

export default Component;
