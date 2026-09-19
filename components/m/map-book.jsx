import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-06qbclg.css';
import '../../css/r/ryca0qb-r.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-06qbclg"/><path class="ryca0qb-r"/>`,
		"fallback": "gis:map-book",
	});
}

export default Component;
