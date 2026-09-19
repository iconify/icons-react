import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq6pcfb0a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq6pcfb0a"/>`,
		"fallback": "at-icons:pie-chart",
	});
}

export default Component;
