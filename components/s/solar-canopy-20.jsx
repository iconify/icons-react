import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceex6qbaz.css';
import '../../css/c/chgc5thhd.css';
import '../../css/h/hyns0sb6c.css';
import '../../css/d/ds_4hp33i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceex6qbaz"/><path class="chgc5thhd"/><path class="hyns0sb6c"/><path class="ds_4hp33i"/>`,
		"fallback": "energy-icons:solar-canopy-20",
	});
}

export default Component;
