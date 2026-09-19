import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbm8gfb4x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbm8gfb4x"/>`,
		"fallback": "gis:topography",
	});
}

export default Component;
