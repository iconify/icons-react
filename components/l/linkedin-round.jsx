import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2p7okggn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2p7okggn"/>`,
		"fallback": "coolicons:linkedin-round",
	});
}

export default Component;
