import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl6s_972s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl6s_972s"/>`,
		"fallback": "game-icons:telefrag",
	});
}

export default Component;
