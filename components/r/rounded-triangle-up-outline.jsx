import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8up-1bkp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8up-1bkp"/>`,
		"fallback": "pinhead:rounded-triangle-up-outline",
	});
}

export default Component;
