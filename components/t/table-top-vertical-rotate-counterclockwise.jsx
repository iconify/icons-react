import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hienlub7q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hienlub7q"/>`,
		"fallback": "memory:table-top-vertical-rotate-counterclockwise",
	});
}

export default Component;
