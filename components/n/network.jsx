import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6k4kmb6a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6k4kmb6a"/>`,
		"fallback": "gis:network",
	});
}

export default Component;
