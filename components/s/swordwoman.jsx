import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl3p7dbdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl3p7dbdm"/>`,
		"fallback": "game-icons:swordwoman",
	});
}

export default Component;
