import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3pri2b8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p3pri2b8q"/>`,
		"fallback": "streamline:star-badge-solid",
	});
}

export default Component;
