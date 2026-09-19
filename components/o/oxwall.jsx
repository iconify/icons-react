import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2wn88brl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2wn88brl"/>`,
		"fallback": "whh:oxwall",
	});
}

export default Component;
