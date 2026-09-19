import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb-tadh8i.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb-tadh8i"/>`,
		"fallback": "gis:layer-poi",
	});
}

export default Component;
