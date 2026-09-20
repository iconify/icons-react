import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ted_08wrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ted_08wrm"/>`,
		"fallback": "lets-icons:line-in",
	});
}

export default Component;
