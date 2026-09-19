import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocb9_nbex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocb9_nbex"/>`,
		"fallback": "game-icons:powder",
	});
}

export default Component;
