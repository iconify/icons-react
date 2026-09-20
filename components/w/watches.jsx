import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj9yp3bwy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj9yp3bwy"/>`,
		"fallback": "roentgen:watches",
	});
}

export default Component;
