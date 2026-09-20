import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzy6mq1xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzy6mq1xl"/>`,
		"fallback": "tabler:map-star",
	});
}

export default Component;
