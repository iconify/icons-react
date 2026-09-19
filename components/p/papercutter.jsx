import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4xv3tn6n.css';

const viewBox = {"width":895,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4xv3tn6n"/>`,
		"fallback": "whh:papercutter",
	});
}

export default Component;
