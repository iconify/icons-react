import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt1vy-ast.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt1vy-ast"/>`,
		"fallback": "fluent-mdl2:pentagon",
	});
}

export default Component;
