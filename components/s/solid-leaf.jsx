import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp2j0pbsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp2j0pbsv"/>`,
		"fallback": "game-icons:solid-leaf",
	});
}

export default Component;
