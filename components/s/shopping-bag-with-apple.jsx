import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbk67ub8k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbk67ub8k"/>`,
		"fallback": "pinhead:shopping-bag-with-apple",
	});
}

export default Component;
