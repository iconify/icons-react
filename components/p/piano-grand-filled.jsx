import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdqo3k3dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdqo3k3dm"/>`,
		"fallback": "boxicons:piano-grand-filled",
	});
}

export default Component;
