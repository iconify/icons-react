import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imx0tq8pe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imx0tq8pe"/>`,
		"fallback": "zondicons:pause",
	});
}

export default Component;
