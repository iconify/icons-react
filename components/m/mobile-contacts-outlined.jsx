import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgpwjib-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgpwjib-c"/>`,
		"fallback": "weui:mobile-contacts-outlined",
	});
}

export default Component;
