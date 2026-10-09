import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y06_bibde.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y06_bibde"/>`,
		"fallback": "energy-icons:loader-2-20-bold",
	});
}

export default Component;
