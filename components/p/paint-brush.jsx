import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kohcfm9fk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kohcfm9fk"/>`,
		"fallback": "game-icons:paint-brush",
	});
}

export default Component;
