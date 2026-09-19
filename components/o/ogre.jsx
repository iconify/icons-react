import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8sxkwuez.css';
import '../../css/q/qrooeccgx.css';
import '../../css/w/wq2z_ybbr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8sxkwuez"/><path class="qrooeccgx"/><path class="wq2z_ybbr"/>`,
		"fallback": "fxemoji:ogre",
	});
}

export default Component;
