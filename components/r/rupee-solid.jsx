import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gav4x1b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gav4x1b2p"/>`,
		"fallback": "mynaui:rupee-solid",
	});
}

export default Component;
