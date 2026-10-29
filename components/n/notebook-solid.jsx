import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjgn7172q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjgn7172q"/>`,
		"fallback": "withicons:notebook-solid",
	});
}

export default Component;
