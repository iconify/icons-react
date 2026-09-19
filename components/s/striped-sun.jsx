import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3dapca7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3dapca7s"/>`,
		"fallback": "game-icons:striped-sun",
	});
}

export default Component;
