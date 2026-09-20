import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bckfujq4q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bckfujq4q"/>`,
		"fallback": "pinhead:shopping-bag-with-wifi",
	});
}

export default Component;
