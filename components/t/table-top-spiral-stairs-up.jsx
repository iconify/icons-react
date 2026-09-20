import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olo5y3b-d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olo5y3b-d"/>`,
		"fallback": "memory:table-top-spiral-stairs-up",
	});
}

export default Component;
