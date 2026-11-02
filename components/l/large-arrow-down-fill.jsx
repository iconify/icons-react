import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t--3ic8dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t--3ic8dj"/>`,
		"fallback": "mingcute:large-arrow-down-fill",
	});
}

export default Component;
