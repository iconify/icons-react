import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g53dd3b6v.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g53dd3b6v"/>`,
		"fallback": "wi:moon-20",
	});
}

export default Component;
