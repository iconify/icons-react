import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1kxjsbic.css';
import '../../css/e/e0vgkpblk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1kxjsbic"/><path class="e0vgkpblk"/>`,
		"fallback": "selfhst:proton-pass-light",
	});
}

export default Component;
