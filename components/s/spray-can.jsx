import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow_mhd47z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow_mhd47z"/>`,
		"fallback": "la:spray-can",
	});
}

export default Component;
