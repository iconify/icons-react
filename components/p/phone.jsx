import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3r6n63fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3r6n63fd"/>`,
		"fallback": "guidance:phone",
	});
}

export default Component;
