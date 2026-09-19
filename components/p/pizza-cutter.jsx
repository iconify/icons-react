import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv8ph2xqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv8ph2xqc"/>`,
		"fallback": "game-icons:pizza-cutter",
	});
}

export default Component;
