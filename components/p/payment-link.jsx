import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od9ez2buj.css';
import '../../css/h/hstvx30-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od9ez2buj"/><path class="hstvx30-v"/>`,
		"fallback": "stash:payment-link",
	});
}

export default Component;
