import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irh8f2r2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irh8f2r2i"/>`,
		"fallback": "game-icons:iron-cross",
	});
}

export default Component;
