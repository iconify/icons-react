import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpm4zwb3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpm4zwb3w"/>`,
		"fallback": "famicons:remove-circle",
	});
}

export default Component;
