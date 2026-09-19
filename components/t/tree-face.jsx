import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvyb1cb8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvyb1cb8y"/>`,
		"fallback": "game-icons:tree-face",
	});
}

export default Component;
