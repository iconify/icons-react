import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2l1x3bxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2l1x3bxz"/>`,
		"fallback": "roentgen:street-cabinet-drop",
	});
}

export default Component;
