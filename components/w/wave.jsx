import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln87rknis.css';
import '../../css/c/ceswd_37u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln87rknis"/><path class="ceswd_37u"/>`,
		"fallback": "fxemoji:wave",
	});
}

export default Component;
