import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea5ltub7g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea5ltub7g"/>`,
		"fallback": "pinhead:shopping-bag-with-shekel",
	});
}

export default Component;
