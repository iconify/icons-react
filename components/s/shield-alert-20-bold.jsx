import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdw3vx8xp.css';
import '../../css/j/jgxj3hb_t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdw3vx8xp"/><path class="jgxj3hb_t"/>`,
		"fallback": "energy-icons:shield-alert-20-bold",
	});
}

export default Component;
