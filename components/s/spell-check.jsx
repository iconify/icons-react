import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-29oacxi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-29oacxi"/>`,
		"fallback": "icomoon-free:spell-check",
	});
}

export default Component;
