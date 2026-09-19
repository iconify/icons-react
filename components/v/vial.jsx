import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ntt-odb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ntt-odb"/>`,
		"fallback": "circum:vial",
	});
}

export default Component;
