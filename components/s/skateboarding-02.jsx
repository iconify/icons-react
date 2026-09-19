import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd5t3ac2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd5t3ac2q"/>`,
		"fallback": "game-icons:skateboarding-02",
	});
}

export default Component;
