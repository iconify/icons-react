import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z735ileap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z735ileap"/>`,
		"fallback": "game-icons:mac-10",
	});
}

export default Component;
