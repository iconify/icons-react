import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej618wb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej618wb9x"/>`,
		"fallback": "mdi:movie-search",
	});
}

export default Component;
