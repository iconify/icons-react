import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7-z29e1y.css';

const viewBox = {"width":717,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7-z29e1y"/>`,
		"fallback": "ls:paramater",
	});
}

export default Component;
