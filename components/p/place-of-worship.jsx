import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b81cd0uud.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b81cd0uud"/>`,
		"fallback": "fa-solid:place-of-worship",
	});
}

export default Component;
