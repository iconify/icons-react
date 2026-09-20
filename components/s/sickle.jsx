import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhv2rb_dl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhv2rb_dl"/>`,
		"fallback": "mdi:sickle",
	});
}

export default Component;
