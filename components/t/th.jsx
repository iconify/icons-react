import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df0e-4b-s.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df0e-4b-s"/>`,
		"fallback": "websymbol:th",
	});
}

export default Component;
