import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9-4b0rca.css';
import '../../css/l/lrv75jbqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9-4b0rca"/><path class="lrv75jbqe"/>`,
		"fallback": "selfhst:little-chat-dark",
	});
}

export default Component;
