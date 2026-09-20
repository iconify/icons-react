import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbkbqr1mk.css';
import '../../css/h/h-szocp3t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbkbqr1mk"/><path class="h-szocp3t"/>`,
		"fallback": "streamline-pixel:interface-essential-switch-off",
	});
}

export default Component;
