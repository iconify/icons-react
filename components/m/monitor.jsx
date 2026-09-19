import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_-r3se3i.css';
import '../../css/j/juudgbbnj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_-r3se3i"/><path class="juudgbbnj"/>`,
		"fallback": "cil:monitor",
	});
}

export default Component;
