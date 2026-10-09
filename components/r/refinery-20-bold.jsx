import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-nxg9bwf.css';
import '../../css/u/u5r5zmbsy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-nxg9bwf"/><path class="u5r5zmbsy"/>`,
		"fallback": "energy-icons:refinery-20-bold",
	});
}

export default Component;
