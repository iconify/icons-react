import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3uhkpz7r.css';
import '../../css/j/j_u0kbnup.css';
import '../../css/v/v-u3t3bvn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3uhkpz7r"/><path class="j_u0kbnup"/><path class="v-u3t3bvn"/>`,
		"fallback": "energy-icons:plumb-bob-20-bold",
	});
}

export default Component;
