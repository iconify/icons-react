import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cshrf3fgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cshrf3fgr"/>`,
		"fallback": "game-icons:sasquatch",
	});
}

export default Component;
