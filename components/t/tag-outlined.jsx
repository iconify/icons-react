import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv9mq4pxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv9mq4pxm"/>`,
		"fallback": "weui:tag-outlined",
	});
}

export default Component;
