import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcc10c5ah.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcc10c5ah"/>`,
		"fallback": "fa7-brands:square-git",
	});
}

export default Component;
