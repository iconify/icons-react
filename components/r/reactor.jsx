import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rex-s-bkb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rex-s-bkb"/>`,
		"fallback": "game-icons:reactor",
	});
}

export default Component;
