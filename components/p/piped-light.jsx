import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p75du9kle.css';
import '../../css/f/f08bsp95i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p75du9kle"/><path class="f08bsp95i"/>`,
		"fallback": "selfhst:piped-light",
	});
}

export default Component;
