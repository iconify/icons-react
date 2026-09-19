import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j506mmb-y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j506mmb-y"/>`,
		"fallback": "fa7-solid:kitchen-set",
	});
}

export default Component;
