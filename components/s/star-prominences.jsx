import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu85-wv1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu85-wv1d"/>`,
		"fallback": "game-icons:star-prominences",
	});
}

export default Component;
