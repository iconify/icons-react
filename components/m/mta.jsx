import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xicth8brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xicth8brp"/>`,
		"fallback": "token:mta",
	});
}

export default Component;
