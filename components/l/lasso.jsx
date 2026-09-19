import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xri_i47lq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xri_i47lq"/>`,
		"fallback": "game-icons:lasso",
	});
}

export default Component;
