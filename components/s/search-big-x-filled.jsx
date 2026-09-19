import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-ndh8igt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-ndh8igt"/>`,
		"fallback": "boxicons:search-big-x-filled",
	});
}

export default Component;
