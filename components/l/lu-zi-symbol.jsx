import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phln6ib9n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phln6ib9n"/>`,
		"fallback": "pinhead:lu-zi-symbol",
	});
}

export default Component;
