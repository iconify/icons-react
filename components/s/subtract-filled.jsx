import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6ja8kb8n.css';
import '../../css/v/v1cwuvwqe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6ja8kb8n"/><path class="v1cwuvwqe"/>`,
		"fallback": "carbon:subtract-filled",
	});
}

export default Component;
