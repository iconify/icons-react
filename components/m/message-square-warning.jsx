import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/o/o67i6cb6d.css';
import '../../css/l/laqcpqnvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dp12a2bii"/><path class="o67i6cb6d"/><path class="laqcpqnvz"/></g>`,
		"fallback": "iconaut:message-square-warning",
	});
}

export default Component;
