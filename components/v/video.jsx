import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhyin5bqk.css';

const viewBox = {"width":1360,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhyin5bqk"/>`,
		"fallback": "websymbol:video",
	});
}

export default Component;
