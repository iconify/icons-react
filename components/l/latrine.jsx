import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-7-ds7vn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-7-ds7vn"/>`,
		"fallback": "pinhead:latrine",
	});
}

export default Component;
