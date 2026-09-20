import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8nyzz8mt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8nyzz8mt"/>`,
		"fallback": "streamline-plump:user-sticker-square-solid",
	});
}

export default Component;
