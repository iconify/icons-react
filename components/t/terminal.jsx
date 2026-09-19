import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv8oerjzy.css';

const viewBox = {"width":1360,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv8oerjzy"/>`,
		"fallback": "websymbol:terminal",
	});
}

export default Component;
