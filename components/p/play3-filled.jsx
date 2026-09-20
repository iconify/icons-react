import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9r14fl0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9r14fl0l"/>`,
		"fallback": "reicon:play3-filled",
	});
}

export default Component;
