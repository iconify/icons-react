import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w03ix6lll.css';

const viewBox = {"width":286,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w03ix6lll"/>`,
		"fallback": "file-icons:pogoscript",
	});
}

export default Component;
