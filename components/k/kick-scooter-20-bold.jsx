import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9astq9iv.css';
import '../../css/t/ts6ghieqe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9astq9iv"/><path class="ts6ghieqe"/>`,
		"fallback": "energy-icons:kick-scooter-20-bold",
	});
}

export default Component;
