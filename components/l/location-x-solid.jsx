import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aof8t-bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aof8t-bpc"/>`,
		"fallback": "mynaui:location-x-solid",
	});
}

export default Component;
