import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk2q3ab5v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk2q3ab5v"/>`,
		"fallback": "pinhead:syrup-jug-with-maple-leaf",
	});
}

export default Component;
