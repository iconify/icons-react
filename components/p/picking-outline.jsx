import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oizeq86kc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oizeq86kc"/>`,
		"fallback": "lsicon:picking-outline",
	});
}

export default Component;
