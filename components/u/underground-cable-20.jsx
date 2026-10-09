import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubhg269_g.css';
import '../../css/h/hsrqj8b_j.css';
import '../../css/p/pt6rgpv5e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubhg269_g"/><path class="hsrqj8b_j"/><path class="pt6rgpv5e"/>`,
		"fallback": "energy-icons:underground-cable-20",
	});
}

export default Component;
