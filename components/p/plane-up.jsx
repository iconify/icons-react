import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp03et8ui.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp03et8ui"/>`,
		"fallback": "fa6-solid:plane-up",
	});
}

export default Component;
