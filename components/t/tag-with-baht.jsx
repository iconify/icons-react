import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aawv9vq4e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aawv9vq4e"/>`,
		"fallback": "pinhead:tag-with-baht",
	});
}

export default Component;
