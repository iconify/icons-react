import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3wl0cc2z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3wl0cc2z"/>`,
		"fallback": "gis:satellite",
	});
}

export default Component;
