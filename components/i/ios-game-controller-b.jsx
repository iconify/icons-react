import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmy-rlt6c.css';
import '../../css/l/l144cxb6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmy-rlt6c"/><path class="l144cxb6j"/>`,
		"fallback": "ion:ios-game-controller-b",
	});
}

export default Component;
