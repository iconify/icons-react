import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrg6hlbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrg6hlbqf"/>`,
		"fallback": "griddy-icons:shopping-bag-filled",
	});
}

export default Component;
