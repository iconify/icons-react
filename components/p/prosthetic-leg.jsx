import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzba4of-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzba4of-v"/>`,
		"fallback": "guidance:prosthetic-leg",
	});
}

export default Component;
