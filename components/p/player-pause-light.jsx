import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnje3hq9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnje3hq9k"/>`,
		"fallback": "iconamoon:player-pause-light",
	});
}

export default Component;
