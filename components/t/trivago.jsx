import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic2p6wb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic2p6wb-n"/>`,
		"fallback": "thesvg-color:trivago",
	});
}

export default Component;
