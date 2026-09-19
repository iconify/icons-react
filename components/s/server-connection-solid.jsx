import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9mz3ibbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b9mz3ibbs"/>`,
		"fallback": "iconoir:server-connection-solid",
	});
}

export default Component;
