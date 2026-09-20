import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8p6quc-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8p6quc-s"/>`,
		"fallback": "qlementine-icons:mandolin-24",
	});
}

export default Component;
