import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isz-uwbjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isz-uwbjq"/>`,
		"fallback": "game-icons:medallist",
	});
}

export default Component;
