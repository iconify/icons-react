import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf0jxtmrs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf0jxtmrs"/>`,
		"fallback": "gis:move",
	});
}

export default Component;
