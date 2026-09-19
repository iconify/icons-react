import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rid0luifp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rid0luifp"/>`,
		"fallback": "at-icons:torus",
	});
}

export default Component;
