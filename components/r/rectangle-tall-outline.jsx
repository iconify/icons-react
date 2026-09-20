import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cho2ybc2v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cho2ybc2v"/>`,
		"fallback": "pinhead:rectangle-tall-outline",
	});
}

export default Component;
