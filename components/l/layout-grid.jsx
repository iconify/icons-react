import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntw0kh4xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntw0kh4xh"/>`,
		"fallback": "gg:layout-grid",
	});
}

export default Component;
