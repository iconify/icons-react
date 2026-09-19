import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdrx4h24c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdrx4h24c"/>`,
		"fallback": "garden:puzzle-piece-fill-16",
	});
}

export default Component;
