import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di2srog2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di2srog2l"/>`,
		"fallback": "game-icons:mail-shirt",
	});
}

export default Component;
