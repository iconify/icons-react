import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udmf8ljox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udmf8ljox"/>`,
		"fallback": "game-icons:night-sky",
	});
}

export default Component;
