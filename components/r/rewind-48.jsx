import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4n60ybfu.css';
import '../../css/e/e52uakbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4n60ybfu"/><path class="e52uakbgw"/>`,
		"fallback": "energy-icons:rewind-48",
	});
}

export default Component;
