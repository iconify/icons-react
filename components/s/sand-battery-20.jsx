import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvz2snqgx.css';
import '../../css/g/gulcoab9z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvz2snqgx"/><path class="gulcoab9z"/>`,
		"fallback": "energy-icons:sand-battery-20",
	});
}

export default Component;
