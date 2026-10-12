import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj9rxse9e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj9rxse9e"/>`,
		"fallback": "garden:paper-plane-fill-20",
	});
}

export default Component;
