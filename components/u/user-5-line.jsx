import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auh7lt8aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auh7lt8aw"/>`,
		"fallback": "mingcute:user-5-line",
	});
}

export default Component;
