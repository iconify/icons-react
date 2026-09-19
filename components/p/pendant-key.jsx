import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnac3h90z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnac3h90z"/>`,
		"fallback": "game-icons:pendant-key",
	});
}

export default Component;
