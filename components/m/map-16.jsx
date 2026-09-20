import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-osqbb5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w-osqbb5m"/>`,
		"fallback": "qlementine-icons:map-16",
	});
}

export default Component;
