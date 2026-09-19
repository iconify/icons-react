import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxvehrb0j.css';
import '../../css/h/h-13c9bbf.css';
import '../../css/r/r99w2lb9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxvehrb0j"/><path class="h-13c9bbf"/><path class="r99w2lb9i"/>`,
		"fallback": "ion:logo-codepen-outline",
	});
}

export default Component;
