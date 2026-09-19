import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eicjl9sjg.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eicjl9sjg"/>`,
		"fallback": "ps:mail-stamp",
	});
}

export default Component;
