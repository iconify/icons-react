import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpol7oimp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpol7oimp"/>`,
		"fallback": "bxs:shield-x",
	});
}

export default Component;
