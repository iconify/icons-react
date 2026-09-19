import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5piqkb1i.css';
import '../../css/m/ms1j4bchs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5piqkb1i"/><path class="ms1j4bchs"/>`,
		"fallback": "ion:logo-ionic-outline",
	});
}

export default Component;
