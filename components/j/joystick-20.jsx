import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irh_wpbqi.css';
import '../../css/t/t_i7wlb6k.css';
import '../../css/e/e71fuis0w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irh_wpbqi"/><path class="t_i7wlb6k"/><path class="e71fuis0w"/>`,
		"fallback": "energy-icons:joystick-20",
	});
}

export default Component;
