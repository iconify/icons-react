import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtjx-7-rw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtjx-7-rw"/>`,
		"fallback": "game-icons:lob-arrow",
	});
}

export default Component;
