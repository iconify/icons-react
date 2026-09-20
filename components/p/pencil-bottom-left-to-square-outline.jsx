import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6flzy-3l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6flzy-3l"/>`,
		"fallback": "pinhead:pencil-bottom-left-to-square-outline",
	});
}

export default Component;
