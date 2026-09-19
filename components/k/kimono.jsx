import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar6wt_bcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar6wt_bcx"/>`,
		"fallback": "game-icons:kimono",
	});
}

export default Component;
