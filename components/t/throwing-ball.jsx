import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw1t09u-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw1t09u-r"/>`,
		"fallback": "game-icons:throwing-ball",
	});
}

export default Component;
