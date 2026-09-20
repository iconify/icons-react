import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj-cleflh.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj-cleflh"/>`,
		"fallback": "system-uicons:volume-minus",
	});
}

export default Component;
