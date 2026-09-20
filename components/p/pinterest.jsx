import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl55q5bty.css';
import '../../css/l/lr1-z_9gb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl55q5bty"/><path class="lr1-z_9gb"/>`,
		"fallback": "selfhst:pinterest",
	});
}

export default Component;
