import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqhvr3bzs.css';

const viewBox = {"width":1360,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqhvr3bzs"/>`,
		"fallback": "websymbol:mail",
	});
}

export default Component;
