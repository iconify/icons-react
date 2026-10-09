import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enxtphbky.css';
import '../../css/n/n4d5fac5i.css';
import '../../css/u/u6c3ru_1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enxtphbky"/><path class="n4d5fac5i"/><path class="u6c3ru_1r"/>`,
		"fallback": "energy-icons:offshore-wind-farm-20",
	});
}

export default Component;
