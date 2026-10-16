import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riu484b2u.css';
import '../../css/j/jbawidbgl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riu484b2u"/><path class="jbawidbgl"/>`,
		"fallback": "energy-icons:phase-shifter-20",
	});
}

export default Component;
