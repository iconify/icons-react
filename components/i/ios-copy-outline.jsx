import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhnf1kbvb.css';
import '../../css/c/ccs4fgbgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhnf1kbvb"/><path class="ccs4fgbgr"/>`,
		"fallback": "ion:ios-copy-outline",
	});
}

export default Component;
