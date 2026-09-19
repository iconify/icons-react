import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfvnc4bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfvnc4bsh"/>`,
		"fallback": "boxicons:vignette-filled",
	});
}

export default Component;
