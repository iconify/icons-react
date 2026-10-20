import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnovs-bfk.css';
import '../../css/o/ow9eo7bnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnovs-bfk"/><path class="ow9eo7bnj"/>`,
		"fallback": "energy-icons:lightbulb-sparkle-20",
	});
}

export default Component;
