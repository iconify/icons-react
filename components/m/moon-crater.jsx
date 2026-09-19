import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js7tbtbkw.css';
import '../../css/j/j1nyzswop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js7tbtbkw"/><path class="j1nyzswop"/>`,
		"fallback": "boxicons:moon-crater",
	});
}

export default Component;
