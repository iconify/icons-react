import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-z8u6wyr.css';
import '../../css/l/l9s722bnc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-z8u6wyr"/><path class="l9s722bnc"/>`,
		"fallback": "energy-icons:solar-inverter-off-20",
	});
}

export default Component;
