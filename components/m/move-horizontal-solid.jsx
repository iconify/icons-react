import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3w5q6brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3w5q6brq"/>`,
		"fallback": "iconaut:move-horizontal-solid",
	});
}

export default Component;
