import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9u4l7btt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9u4l7btt"/>`,
		"fallback": "game-icons:opening-shell",
	});
}

export default Component;
