import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-55etb0y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-55etb0y"/>`,
		"fallback": "pinhead:typha-and-duck-in-water",
	});
}

export default Component;
