import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swka3acgp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swka3acgp"/>`,
		"fallback": "pinhead:taxi-checkerboard",
	});
}

export default Component;
