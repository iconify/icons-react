import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5q5yvb6f.css';
import '../../css/r/rhb8wbjre.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5q5yvb6f"/><path class="rhb8wbjre"/>`,
		"fallback": "energy-icons:phone-20-bold",
	});
}

export default Component;
