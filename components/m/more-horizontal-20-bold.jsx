import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz8a-28-s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz8a-28-s"/>`,
		"fallback": "energy-icons:more-horizontal-20-bold",
	});
}

export default Component;
