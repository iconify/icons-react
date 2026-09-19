import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilbzs25se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilbzs25se"/>`,
		"fallback": "iconoir:scanning",
	});
}

export default Component;
