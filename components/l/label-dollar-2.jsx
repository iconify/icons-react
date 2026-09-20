import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utawi2b_n.css';
import '../../css/m/mx3dnrxyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utawi2b_n"/><path clip-rule="evenodd" class="mx3dnrxyf"/>`,
		"fallback": "lineicons:label-dollar-2",
	});
}

export default Component;
