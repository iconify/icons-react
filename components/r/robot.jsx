import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab2q78-0v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab2q78-0v"/>`,
		"fallback": "fa7-solid:robot",
	});
}

export default Component;
