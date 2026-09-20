import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj0462s5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj0462s5o"/>`,
		"fallback": "vaadin:raster",
	});
}

export default Component;
