import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to1a0gb8b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to1a0gb8b"/>`,
		"fallback": "pinhead:shopping-bag-with-info-i",
	});
}

export default Component;
