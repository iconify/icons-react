import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9htyfbps.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9htyfbps"/>`,
		"fallback": "garden:pause-stroke-16",
	});
}

export default Component;
