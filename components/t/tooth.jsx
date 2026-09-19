import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt_agpben.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt_agpben"/>`,
		"fallback": "game-icons:tooth",
	});
}

export default Component;
