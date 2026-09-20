import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdt1a3-6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wdt1a3-6o"/>`,
		"fallback": "streamline:visible-solid",
	});
}

export default Component;
