import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxcjxo_wu.css';
import '../../css/c/c_4ww1bgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxcjxo_wu"/><path class="c_4ww1bgn"/>`,
		"fallback": "energy-icons:toggle-left-48-bold",
	});
}

export default Component;
