import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enltw_b2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enltw_b2g"/>`,
		"fallback": "pinhead:shopping-bag-with-baht",
	});
}

export default Component;
