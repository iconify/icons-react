import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej1v3t0wm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej1v3t0wm"/>`,
		"fallback": "pinhead:water-tap-with-droplet",
	});
}

export default Component;
