import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d94gv9lat.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d94gv9lat"/>`,
		"fallback": "pinhead:shopping-bag-and-tag",
	});
}

export default Component;
