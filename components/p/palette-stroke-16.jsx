import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvu7g3cfe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvu7g3cfe"/>`,
		"fallback": "garden:palette-stroke-16",
	});
}

export default Component;
