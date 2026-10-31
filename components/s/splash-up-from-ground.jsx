import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb-a68b2d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb-a68b2d"/>`,
		"fallback": "pinhead:splash-up-from-ground",
	});
}

export default Component;
