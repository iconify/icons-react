import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccyq5bk1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccyq5bk1t"/>`,
		"fallback": "humbleicons:ship",
	});
}

export default Component;
