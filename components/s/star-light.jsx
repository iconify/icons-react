import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mghr8fbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mghr8fbbc"/>`,
		"fallback": "iconamoon:star-light",
	});
}

export default Component;
