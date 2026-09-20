import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llj7g0giq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llj7g0giq"/>`,
		"fallback": "tabler:layout-list",
	});
}

export default Component;
