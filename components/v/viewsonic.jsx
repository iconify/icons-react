import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi6fgjbjc.css';

const viewBox = {"width":200.575,"height":32.571};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi6fgjbjc"/>`,
		"fallback": "thesvg-color:viewsonic",
	});
}

export default Component;
