import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm5q7xb3m.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm5q7xb3m"/>`,
		"fallback": "fa6-solid:tv",
	});
}

export default Component;
