import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc7sk8bgn.css';
import '../../css/h/hiqojibfd.css';
import '../../css/r/rb9owibwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc7sk8bgn"/><path class="hiqojibfd"/><path class="rb9owibwy"/>`,
		"fallback": "energy-icons:spot-price-48-bold",
	});
}

export default Component;
