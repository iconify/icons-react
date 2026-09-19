import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku0_1_nkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku0_1_nkh"/>`,
		"fallback": "game-icons:paper-lantern",
	});
}

export default Component;
