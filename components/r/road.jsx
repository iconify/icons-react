import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8gp7h6jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8gp7h6jt"/>`,
		"fallback": "boxicons:road",
	});
}

export default Component;
