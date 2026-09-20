import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mefxu2bqx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mefxu2bqx"/>`,
		"fallback": "memory:javalin",
	});
}

export default Component;
