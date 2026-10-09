import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi0fb9bvt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi0fb9bvt"/>`,
		"fallback": "energy-icons:users-20",
	});
}

export default Component;
