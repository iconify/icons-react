import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0oaufjyz.css';
import '../../css/t/t3d4-stmx.css';
import '../../css/p/p8i175dpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0oaufjyz"/><path class="t3d4-stmx"/><path class="p8i175dpp"/>`,
		"fallback": "fxemoji:pinkwallet",
	});
}

export default Component;
