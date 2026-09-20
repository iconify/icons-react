import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4ysgrd8q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4ysgrd8q"/>`,
		"fallback": "roentgen:vending-bottle-upside-down",
	});
}

export default Component;
