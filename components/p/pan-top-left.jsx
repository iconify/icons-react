import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaj_g9blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaj_g9blf"/>`,
		"fallback": "mdi:pan-top-left",
	});
}

export default Component;
