import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuon0ob1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuon0ob1z"/>`,
		"fallback": "token:vv",
	});
}

export default Component;
