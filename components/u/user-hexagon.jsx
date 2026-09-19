import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-kwgp5vg.css';
import '../../css/u/ujjz19bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-kwgp5vg"/><path class="ujjz19bnp"/>`,
		"fallback": "boxicons:user-hexagon",
	});
}

export default Component;
