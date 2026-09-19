import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyjspsb8d.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyjspsb8d"/>`,
		"fallback": "fontisto:table-2",
	});
}

export default Component;
