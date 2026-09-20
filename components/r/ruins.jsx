import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iao01gbpl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iao01gbpl"/>`,
		"fallback": "temaki:ruins",
	});
}

export default Component;
