import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6o6plple.css';
import '../../css/q/q7t23dnix.css';
import '../../css/n/nop6cvc4u.css';
import '../../css/i/i8q51abek.css';
import '../../css/t/ti1b56bbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6o6plple"/><path class="q7t23dnix"/><path class="nop6cvc4u"/><path class="i8q51abek"/><path class="ti1b56bbu"/>`,
		"fallback": "streamline-pixel:interface-essential-shrink-4",
	});
}

export default Component;
