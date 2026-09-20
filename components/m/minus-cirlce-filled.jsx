import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp3383-fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp3383-fi"/>`,
		"fallback": "reicon:minus-cirlce-filled",
	});
}

export default Component;
