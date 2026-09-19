import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tny4cibpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tny4cibpl"/>`,
		"fallback": "game-icons:purple-tentacle",
	});
}

export default Component;
