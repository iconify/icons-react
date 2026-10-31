import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr7lizbpl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr7lizbpl"/>`,
		"fallback": "pinhead:shopping-bag-with-heart",
	});
}

export default Component;
