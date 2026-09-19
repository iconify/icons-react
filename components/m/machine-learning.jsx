import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8fz8rrug.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8fz8rrug"/>`,
		"fallback": "fluent-mdl2:machine-learning",
	});
}

export default Component;
