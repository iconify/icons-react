import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6az2bcvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6az2bcvk"/>`,
		"fallback": "game-icons:trinacria",
	});
}

export default Component;
