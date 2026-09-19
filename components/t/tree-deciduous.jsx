import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qao93n-ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qao93n-ai"/>`,
		"fallback": "hugeicons:tree-deciduous",
	});
}

export default Component;
