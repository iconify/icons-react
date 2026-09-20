import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awv-u-rtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awv-u-rtm"/>`,
		"fallback": "mynaui:toggle-left-solid",
	});
}

export default Component;
