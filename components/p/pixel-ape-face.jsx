import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_5t3tb6d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_5t3tb6d"/>`,
		"fallback": "pinhead:pixel-ape-face",
	});
}

export default Component;
