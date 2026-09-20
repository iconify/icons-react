import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk81-zpyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk81-zpyh"/>`,
		"fallback": "mynaui:undo-solid",
	});
}

export default Component;
