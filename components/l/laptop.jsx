import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ydkjijhaq.css';
import '../../css/y/yq2tbpldz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ydkjijhaq"/><path class="yq2tbpldz"/></g>`,
		"fallback": "iconaut:laptop",
	});
}

export default Component;
