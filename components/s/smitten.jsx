import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icxq6rm-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icxq6rm-e"/>`,
		"fallback": "game-icons:smitten",
	});
}

export default Component;
