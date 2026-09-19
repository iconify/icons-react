import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkqua9d2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkqua9d2d"/>`,
		"fallback": "iconamoon:playlist-shuffle-bold",
	});
}

export default Component;
