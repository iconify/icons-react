import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wekkht5nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wekkht5nh"/>`,
		"fallback": "vadivam:ruler",
	});
}

export default Component;
