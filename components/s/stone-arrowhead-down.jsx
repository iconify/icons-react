import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4fl3t3ql.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4fl3t3ql"/>`,
		"fallback": "pinhead:stone-arrowhead-down",
	});
}

export default Component;
