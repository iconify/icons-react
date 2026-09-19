import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvx9auxoc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvx9auxoc"/>`,
		"fallback": "game-icons:jack-plug",
	});
}

export default Component;
