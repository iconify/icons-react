import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4kz77b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4kz77b7p"/>`,
		"fallback": "mynaui:stamp-solid",
	});
}

export default Component;
