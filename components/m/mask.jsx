import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ete8q8b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ete8q8b8q"/>`,
		"fallback": "fe:mask",
	});
}

export default Component;
