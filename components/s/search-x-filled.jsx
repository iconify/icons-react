import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx7g8xu8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx7g8xu8c"/>`,
		"fallback": "boxicons:search-x-filled",
	});
}

export default Component;
