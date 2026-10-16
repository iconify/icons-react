import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsmnqk5do.css';
import '../../css/h/hqec9ivlc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsmnqk5do"/><path class="hqec9ivlc"/>`,
		"fallback": "energy-icons:voltage-tester-20-bold",
	});
}

export default Component;
