import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h96_q3ijz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h96_q3ijz"/>`,
		"fallback": "game-icons:monstera-leaf",
	});
}

export default Component;
