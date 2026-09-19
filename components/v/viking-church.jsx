import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xso4m5s-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xso4m5s-j"/>`,
		"fallback": "game-icons:viking-church",
	});
}

export default Component;
