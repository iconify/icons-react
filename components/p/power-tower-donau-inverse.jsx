import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bphikbbnj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bphikbbnj"/>`,
		"fallback": "roentgen:power-tower-donau-inverse",
	});
}

export default Component;
