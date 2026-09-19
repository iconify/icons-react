import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cwke7rf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_cwke7rf"/>`,
		"fallback": "fa6-brands:mixcloud",
	});
}

export default Component;
