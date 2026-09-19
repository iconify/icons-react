import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1p69sb8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1p69sb8d"/>`,
		"fallback": "game-icons:skid-mark",
	});
}

export default Component;
