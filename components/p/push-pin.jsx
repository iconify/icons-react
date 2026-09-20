import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsift9fqb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsift9fqb"/>`,
		"fallback": "ooui:push-pin",
	});
}

export default Component;
