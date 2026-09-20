import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0s92v4dz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0s92v4dz"/>`,
		"fallback": "vaadin:office",
	});
}

export default Component;
