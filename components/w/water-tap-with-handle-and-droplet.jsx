import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc77nee5r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc77nee5r"/>`,
		"fallback": "pinhead:water-tap-with-handle-and-droplet",
	});
}

export default Component;
