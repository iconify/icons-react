import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnw1cjxky.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnw1cjxky"/>`,
		"fallback": "fluent-mdl2:stacked-column-chart-2",
	});
}

export default Component;
