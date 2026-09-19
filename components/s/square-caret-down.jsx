import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3j1eqb-g.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3j1eqb-g"/>`,
		"fallback": "fa6-regular:square-caret-down",
	});
}

export default Component;
