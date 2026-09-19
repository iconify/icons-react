import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsfqp5b1r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsfqp5b1r"/>`,
		"fallback": "fluent-mdl2:s-q-l-analytics-pool",
	});
}

export default Component;
