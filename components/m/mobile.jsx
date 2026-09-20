import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4na-4bez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4na-4bez"/>`,
		"fallback": "uiw:mobile",
	});
}

export default Component;
