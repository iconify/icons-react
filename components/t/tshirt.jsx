import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oonyl_b5n.css';

const viewBox = {"width":1024,"height":897};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oonyl_b5n"/>`,
		"fallback": "whh:tshirt",
	});
}

export default Component;
