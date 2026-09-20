import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqz9wkbyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqz9wkbyr"/>`,
		"fallback": "lsicon:leaf-outline",
	});
}

export default Component;
