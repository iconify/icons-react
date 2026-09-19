import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csg07lgga.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csg07lgga"/>`,
		"fallback": "dinkie-icons:movie-camera",
	});
}

export default Component;
