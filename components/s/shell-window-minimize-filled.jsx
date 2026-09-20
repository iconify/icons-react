import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnaelyb2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qnaelyb2z"/>`,
		"fallback": "lsicon:shell-window-minimize-filled",
	});
}

export default Component;
