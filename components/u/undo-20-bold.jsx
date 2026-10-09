import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g22-s43ip.css';
import '../../css/f/f4_61hgfj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g22-s43ip"/><path class="f4_61hgfj"/>`,
		"fallback": "energy-icons:undo-20-bold",
	});
}

export default Component;
