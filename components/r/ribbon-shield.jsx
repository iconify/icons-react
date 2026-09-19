import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmchpd_lx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmchpd_lx"/>`,
		"fallback": "game-icons:ribbon-shield",
	});
}

export default Component;
