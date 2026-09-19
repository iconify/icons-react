import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ugb02zx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7ugb02zx"/>`,
		"fallback": "game-icons:shorts",
	});
}

export default Component;
