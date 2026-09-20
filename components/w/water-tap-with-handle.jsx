import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx3flsb5x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx3flsb5x"/>`,
		"fallback": "pinhead:water-tap-with-handle",
	});
}

export default Component;
