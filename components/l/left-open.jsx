import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rny4j3b8l.css';

const viewBox = {"width":654,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rny4j3b8l"/>`,
		"fallback": "websymbol:left-open",
	});
}

export default Component;
