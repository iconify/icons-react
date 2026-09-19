import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alr3ezbts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alr3ezbts"/>`,
		"fallback": "game-icons:two-handed-sword",
	});
}

export default Component;
