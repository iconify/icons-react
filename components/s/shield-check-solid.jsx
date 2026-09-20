import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvbeo8bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvbeo8bxf"/>`,
		"fallback": "mynaui:shield-check-solid",
	});
}

export default Component;
