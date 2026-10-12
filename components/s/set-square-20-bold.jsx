import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo8-8l0ji.css';
import '../../css/n/nd0nkt-ng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo8-8l0ji"/><path class="nd0nkt-ng"/>`,
		"fallback": "energy-icons:set-square-20-bold",
	});
}

export default Component;
