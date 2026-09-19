import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce5pb3pjb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce5pb3pjb"/>`,
		"fallback": "fa7-solid:teeth-open",
	});
}

export default Component;
