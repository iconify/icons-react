import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsu1dvs7q.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsu1dvs7q"/>`,
		"fallback": "academicons:lattes-square",
	});
}

export default Component;
