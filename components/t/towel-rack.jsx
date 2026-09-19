import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cel3xzbip.css';
import '../../css/l/lk1vu0bqa.css';
import '../../css/r/rnh6u-77o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cel3xzbip"/><path class="lk1vu0bqa"/><path class="rnh6u-77o"/></g>`,
		"fallback": "hugeicons:towel-rack",
	});
}

export default Component;
