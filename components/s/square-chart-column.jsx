import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjvuq6yti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jjvuq6yti"/>`,
		"fallback": "gravity-ui:square-chart-column",
	});
}

export default Component;
