import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rimqx6bbk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rimqx6bbk"/>`,
		"fallback": "streamline:smoking-area-remix",
	});
}

export default Component;
