import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wje2n0b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wje2n0b4i"/>`,
		"fallback": "iconoir:trekking",
	});
}

export default Component;
