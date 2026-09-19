import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l183q2bkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l183q2bkx"/>`,
		"fallback": "fa6-brands:patreon",
	});
}

export default Component;
