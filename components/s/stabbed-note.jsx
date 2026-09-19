import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzdz8f2mo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzdz8f2mo"/>`,
		"fallback": "game-icons:stabbed-note",
	});
}

export default Component;
