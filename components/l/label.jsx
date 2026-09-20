import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luio64b5z.css';
import '../../css/j/j6ei9utzf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luio64b5z"/><path class="j6ei9utzf"/>`,
		"fallback": "openmoji:label",
	});
}

export default Component;
