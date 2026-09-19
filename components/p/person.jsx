import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r099o0npj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r099o0npj"/>`,
		"fallback": "game-icons:person",
	});
}

export default Component;
