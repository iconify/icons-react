import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd7v1qbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd7v1qbfs"/>`,
		"fallback": "heroicons:sparkles",
	});
}

export default Component;
