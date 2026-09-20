import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jimpt45as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jimpt45as"/>`,
		"fallback": "mynaui:letter-h-circle-solid",
	});
}

export default Component;
