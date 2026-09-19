import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddpxy9bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddpxy9bza"/>`,
		"fallback": "boxicons:phone-x-filled",
	});
}

export default Component;
