import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd4_m4bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd4_m4bhf"/>`,
		"fallback": "mdi-light:phone",
	});
}

export default Component;
