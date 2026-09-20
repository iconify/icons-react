import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a60wceb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a60wceb0s"/>`,
		"fallback": "mdi:school",
	});
}

export default Component;
