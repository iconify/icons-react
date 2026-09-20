import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub9sfq3xt.css';
import '../../css/m/mkx79kbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub9sfq3xt"/><path class="mkx79kbti"/>`,
		"fallback": "stash:pencil-writing",
	});
}

export default Component;
