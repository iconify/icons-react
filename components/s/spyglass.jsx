import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osquvkb3v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osquvkb3v"/>`,
		"fallback": "pinhead:spyglass",
	});
}

export default Component;
