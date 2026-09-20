import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf8y3fpky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf8y3fpky"/>`,
		"fallback": "mynaui:tree-pine-solid",
	});
}

export default Component;
