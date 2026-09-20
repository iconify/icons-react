import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw4xnbcsj.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw4xnbcsj"/>`,
		"fallback": "iwwa:multiply",
	});
}

export default Component;
