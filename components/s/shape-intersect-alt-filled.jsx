import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra46yxsdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra46yxsdn"/>`,
		"fallback": "boxicons:shape-intersect-alt-filled",
	});
}

export default Component;
