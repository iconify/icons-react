import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7aknm1gv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7aknm1gv"/>`,
		"fallback": "energy-icons:loader-20-bold",
	});
}

export default Component;
