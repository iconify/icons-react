import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7c588_9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7c588_9r"/>`,
		"fallback": "mingcute:recycle-fill",
	});
}

export default Component;
