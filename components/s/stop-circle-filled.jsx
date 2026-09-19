import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e16htrgcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e16htrgcm"/>`,
		"fallback": "griddy-icons:stop-circle-filled",
	});
}

export default Component;
