import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu9si2flt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu9si2flt"/>`,
		"fallback": "iconamoon:player-play-light",
	});
}

export default Component;
