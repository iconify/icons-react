import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/relpmcc5r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="relpmcc5r"/>`,
		"fallback": "vaadin:pencil",
	});
}

export default Component;
