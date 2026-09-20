import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lich9zb3k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lich9zb3k"/>`,
		"fallback": "pinhead:smiling-face-in-circle-outline",
	});
}

export default Component;
