import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khjpa1jsp.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khjpa1jsp"/>`,
		"fallback": "system-uicons:volume-muted",
	});
}

export default Component;
