import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkcgv_1ff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkcgv_1ff"/>`,
		"fallback": "game-icons:new-shoot",
	});
}

export default Component;
