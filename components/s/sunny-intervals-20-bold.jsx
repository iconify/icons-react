import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo10pr4qb.css';
import '../../css/j/j3e_0zbsp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo10pr4qb"/><path class="j3e_0zbsp"/>`,
		"fallback": "energy-icons:sunny-intervals-20-bold",
	});
}

export default Component;
