import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsf314beu.css';

const viewBox = {"width":408,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsf314beu"/>`,
		"fallback": "file-icons:ms-dos",
	});
}

export default Component;
