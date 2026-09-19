import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipjl01bdv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipjl01bdv"/>`,
		"fallback": "game-icons:paper-clip",
	});
}

export default Component;
