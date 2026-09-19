import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pso4n1bze.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pso4n1bze"/>`,
		"fallback": "zmdi:n-5-square",
	});
}

export default Component;
