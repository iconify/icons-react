import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liy7sib8p.css';
import '../../css/q/qxycx-kwb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liy7sib8p"/><path class="qxycx-kwb"/>`,
		"fallback": "famicons:videocam-outline",
	});
}

export default Component;
