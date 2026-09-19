import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omq0cw--l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omq0cw--l"/>`,
		"fallback": "game-icons:master-of-arms",
	});
}

export default Component;
