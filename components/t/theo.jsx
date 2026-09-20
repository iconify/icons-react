import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5sthicge.css';
import '../../css/g/gr9tg1wsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5sthicge"/><path class="gr9tg1wsj"/>`,
		"fallback": "token:theo",
	});
}

export default Component;
