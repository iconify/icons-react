import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5lux2bdq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5lux2bdq"/>`,
		"fallback": "fad:modtri",
	});
}

export default Component;
