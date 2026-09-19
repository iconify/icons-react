import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu6lcm68r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu6lcm68r"/>`,
		"fallback": "fluent-mdl2:slider",
	});
}

export default Component;
