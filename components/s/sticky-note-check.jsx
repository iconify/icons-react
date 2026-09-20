import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl1b8ubqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl1b8ubqn"/>`,
		"fallback": "keyline-icons:sticky-note-check",
	});
}

export default Component;
