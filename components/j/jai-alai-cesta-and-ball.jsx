import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvuscacwl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvuscacwl"/>`,
		"fallback": "pinhead:jai-alai-cesta-and-ball",
	});
}

export default Component;
