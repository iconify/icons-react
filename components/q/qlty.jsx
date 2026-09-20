import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0u7fpb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0u7fpb7s"/>`,
		"fallback": "thesvg-color:qlty",
	});
}

export default Component;
