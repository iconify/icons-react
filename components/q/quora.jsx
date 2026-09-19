import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbk2lq5ev.css';

const viewBox = {"width":416,"height":504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbk2lq5ev"/>`,
		"fallback": "ps:quora",
	});
}

export default Component;
