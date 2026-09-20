import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8m9zlofw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8m9zlofw"/>`,
		"fallback": "pinhead:triangle-right-outline",
	});
}

export default Component;
