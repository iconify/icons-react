import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fie42-j_c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fie42-j_c"/>`,
		"fallback": "fluent-mdl2:stacked-column-chart-2-fill",
	});
}

export default Component;
