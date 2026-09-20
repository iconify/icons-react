import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy2y370gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jy2y370gh"/>`,
		"fallback": "token:scrt",
	});
}

export default Component;
