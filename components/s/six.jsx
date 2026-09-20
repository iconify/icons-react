import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8az3ib2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8az3ib2p"/>`,
		"fallback": "mynaui:six",
	});
}

export default Component;
