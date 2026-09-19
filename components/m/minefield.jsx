import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkdvj_bfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkdvj_bfr"/>`,
		"fallback": "game-icons:minefield",
	});
}

export default Component;
