import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nblq55bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nblq55bty"/>`,
		"fallback": "reicon:maximize3-filled",
	});
}

export default Component;
