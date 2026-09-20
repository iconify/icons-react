import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci5j7wbkg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci5j7wbkg"/>`,
		"fallback": "pinhead:texas",
	});
}

export default Component;
