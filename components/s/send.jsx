import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9y6t444d.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9y6t444d"/>`,
		"fallback": "fa:send",
	});
}

export default Component;
