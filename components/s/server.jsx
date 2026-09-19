import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9vy97b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9vy97b6n"/>`,
		"fallback": "grommet-icons:server",
	});
}

export default Component;
