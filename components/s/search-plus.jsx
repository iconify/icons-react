import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvg0ecf5m.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvg0ecf5m"/>`,
		"fallback": "jam:search-plus",
	});
}

export default Component;
