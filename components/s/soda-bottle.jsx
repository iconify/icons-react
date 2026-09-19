import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv5-epbpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv5-epbpt"/>`,
		"fallback": "game-icons:soda-bottle",
	});
}

export default Component;
