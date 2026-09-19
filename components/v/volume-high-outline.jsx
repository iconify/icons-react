import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfgra4b-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfgra4b-f"/>`,
		"fallback": "famicons:volume-high-outline",
	});
}

export default Component;
