import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3ls-9p3k.css';
import '../../css/j/jnr5slbtk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3ls-9p3k"/><path class="jnr5slbtk"/>`,
		"fallback": "selfhst:k7-light",
	});
}

export default Component;
