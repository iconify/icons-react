import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szat01bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szat01bkf"/>`,
		"fallback": "uil:shop",
	});
}

export default Component;
