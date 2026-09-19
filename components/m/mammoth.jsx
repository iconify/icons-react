import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odhxa5e7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odhxa5e7m"/>`,
		"fallback": "game-icons:mammoth",
	});
}

export default Component;
