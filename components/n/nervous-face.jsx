import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwozj6byf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwozj6byf"/>`,
		"fallback": "pinhead:nervous-face",
	});
}

export default Component;
