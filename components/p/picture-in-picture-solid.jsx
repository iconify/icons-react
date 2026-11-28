import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xldl5kbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xldl5kbpt"/>`,
		"fallback": "iconaut:picture-in-picture-solid",
	});
}

export default Component;
