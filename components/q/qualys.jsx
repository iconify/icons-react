import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvv7g0bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvv7g0bst"/>`,
		"fallback": "thesvg-color:qualys",
	});
}

export default Component;
