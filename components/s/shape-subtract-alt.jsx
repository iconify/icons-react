import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slu5h6ecs.css';
import '../../css/f/fu5ar-14p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slu5h6ecs"/><path class="fu5ar-14p"/>`,
		"fallback": "boxicons:shape-subtract-alt",
	});
}

export default Component;
