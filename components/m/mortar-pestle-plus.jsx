import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hapa5u87m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hapa5u87m"/>`,
		"fallback": "mdi:mortar-pestle-plus",
	});
}

export default Component;
