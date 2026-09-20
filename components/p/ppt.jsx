import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa4glvbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa4glvbqm"/>`,
		"fallback": "token:ppt",
	});
}

export default Component;
