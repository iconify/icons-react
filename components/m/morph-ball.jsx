import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pal-dmbxw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pal-dmbxw"/>`,
		"fallback": "game-icons:morph-ball",
	});
}

export default Component;
