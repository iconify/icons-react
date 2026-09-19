import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whnd-fbtw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whnd-fbtw"/>`,
		"fallback": "game-icons:oil-drum",
	});
}

export default Component;
