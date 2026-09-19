import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhqvbkb5g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhqvbkb5g"/>`,
		"fallback": "ep:more-filled",
	});
}

export default Component;
