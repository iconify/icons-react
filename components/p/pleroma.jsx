import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/admg7bcpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="admg7bcpa"/>`,
		"fallback": "thesvg-color:pleroma",
	});
}

export default Component;
