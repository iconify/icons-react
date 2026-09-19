import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr_xxwbkp.css';
import '../../css/j/jyvikwbnh.css';
import '../../css/w/w3xf5cbjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr_xxwbkp"/><path class="jyvikwbnh"/><path class="w3xf5cbjl"/>`,
		"fallback": "famicons:search-circle-outline",
	});
}

export default Component;
