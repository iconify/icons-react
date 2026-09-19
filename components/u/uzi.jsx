import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgx6z8bja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgx6z8bja"/>`,
		"fallback": "game-icons:uzi",
	});
}

export default Component;
