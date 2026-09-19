import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrt69uhvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrt69uhvx"/>`,
		"fallback": "game-icons:mongolia",
	});
}

export default Component;
