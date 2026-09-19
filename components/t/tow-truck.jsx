import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmdj_8bqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmdj_8bqw"/>`,
		"fallback": "game-icons:tow-truck",
	});
}

export default Component;
