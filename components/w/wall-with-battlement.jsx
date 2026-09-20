import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h63rd_q9v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h63rd_q9v"/>`,
		"fallback": "pinhead:wall-with-battlement",
	});
}

export default Component;
