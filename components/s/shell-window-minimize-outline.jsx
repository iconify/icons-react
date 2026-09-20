import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aucf8sb3r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aucf8sb3r"/>`,
		"fallback": "lsicon:shell-window-minimize-outline",
	});
}

export default Component;
