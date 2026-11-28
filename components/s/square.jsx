import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtg_mtnil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtg_mtnil"/>`,
		"fallback": "iconaut:square",
	});
}

export default Component;
