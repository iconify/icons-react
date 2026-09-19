import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo12tqr8l.css';
import '../../css/n/nidir5bxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo12tqr8l"/><path class="nidir5bxi"/>`,
		"fallback": "ion:ios-bell-outline",
	});
}

export default Component;
