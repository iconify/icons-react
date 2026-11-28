import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi5tv6bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi5tv6bkz"/>`,
		"fallback": "noviair:newspaper-plus",
	});
}

export default Component;
