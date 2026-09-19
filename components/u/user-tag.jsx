import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-x1pobvo.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-x1pobvo"/>`,
		"fallback": "fa-solid:user-tag",
	});
}

export default Component;
