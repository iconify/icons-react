import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uah1xhj4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uah1xhj4t"/>`,
		"fallback": "withicons:mic-vocal-solid",
	});
}

export default Component;
