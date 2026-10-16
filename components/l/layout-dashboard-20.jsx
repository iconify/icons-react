import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9xc3xfxy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9xc3xfxy"/>`,
		"fallback": "energy-icons:layout-dashboard-20",
	});
}

export default Component;
