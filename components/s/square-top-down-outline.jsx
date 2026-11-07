import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rszymacgm.css';
import '../../css/l/laen_wd4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rszymacgm"/><path class="laen_wd4e"/>`,
		"fallback": "solar:square-top-down-outline",
	});
}

export default Component;
