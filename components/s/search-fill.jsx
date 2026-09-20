import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uft75ab9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uft75ab9j"/>`,
		"fallback": "ri:search-fill",
	});
}

export default Component;
