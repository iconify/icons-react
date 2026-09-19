import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyjeihbct.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyjeihbct"/>`,
		"fallback": "ps:ufo",
	});
}

export default Component;
