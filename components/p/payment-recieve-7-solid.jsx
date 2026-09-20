import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtpqlxiey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qtpqlxiey"/>`,
		"fallback": "streamline-plump:payment-recieve-7-solid",
	});
}

export default Component;
