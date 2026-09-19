import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzh5qzj1y.css';
import '../../css/k/knqltxb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bzh5qzj1y"/><path class="knqltxb3q"/>`,
		"fallback": "boxicons:laptop-filled",
	});
}

export default Component;
