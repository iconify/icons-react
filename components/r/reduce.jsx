import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1i63cbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1i63cbst"/>`,
		"fallback": "lets-icons:reduce",
	});
}

export default Component;
