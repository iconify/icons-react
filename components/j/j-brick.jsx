import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lor2j1w8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lor2j1w8j"/>`,
		"fallback": "game-icons:j-brick",
	});
}

export default Component;
