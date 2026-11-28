import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvh0v82tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvh0v82tz"/>`,
		"fallback": "noviair:message-square-question",
	});
}

export default Component;
