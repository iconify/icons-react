import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiwkhfbdi.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiwkhfbdi"/>`,
		"fallback": "whh:textfield",
	});
}

export default Component;
