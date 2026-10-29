import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7zs8cblv.css';
import '../../css/p/p8zognblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7zs8cblv"/><path class="p8zognblo"/>`,
		"fallback": "withicons-bauhaus:plus",
	});
}

export default Component;
