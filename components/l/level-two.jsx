import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7vlnacju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7vlnacju"/>`,
		"fallback": "game-icons:level-two",
	});
}

export default Component;
