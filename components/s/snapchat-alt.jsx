import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srb-b2b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srb-b2b2h"/>`,
		"fallback": "uit:snapchat-alt",
	});
}

export default Component;
