import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7d4ky4we.css';
import '../../css/p/polb77bwu.css';
import '../../css/s/sorlblovj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7d4ky4we"/><path class="polb77bwu"/><path class="sorlblovj"/>`,
		"fallback": "energy-icons:lathe-20-bold",
	});
}

export default Component;
