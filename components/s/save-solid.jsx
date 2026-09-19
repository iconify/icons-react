import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdiyfl2-s.css';
import '../../css/d/d_sq5jfqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdiyfl2-s"/><path class="d_sq5jfqe"/>`,
		"fallback": "basil:save-solid",
	});
}

export default Component;
