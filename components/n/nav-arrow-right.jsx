import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs9ntbb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs9ntbb5r"/>`,
		"fallback": "iconoir:nav-arrow-right",
	});
}

export default Component;
