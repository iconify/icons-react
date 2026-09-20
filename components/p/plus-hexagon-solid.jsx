import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h12sh9boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h12sh9boo"/>`,
		"fallback": "mynaui:plus-hexagon-solid",
	});
}

export default Component;
