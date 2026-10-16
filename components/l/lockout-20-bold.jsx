import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utjy8ob5b.css';
import '../../css/t/tzya4mwzm.css';
import '../../css/c/cofnes2hh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utjy8ob5b"/><path class="tzya4mwzm"/><path class="cofnes2hh"/>`,
		"fallback": "energy-icons:lockout-20-bold",
	});
}

export default Component;
