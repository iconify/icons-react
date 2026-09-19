import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umo7ipbbc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umo7ipbbc"/>`,
		"fallback": "icons8:shekel",
	});
}

export default Component;
