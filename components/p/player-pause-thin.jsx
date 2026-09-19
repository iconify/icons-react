import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im851ibbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im851ibbt"/>`,
		"fallback": "iconamoon:player-pause-thin",
	});
}

export default Component;
