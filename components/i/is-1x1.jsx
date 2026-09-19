import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju-jy_b8z.css';
import '../../css/s/sx_geyq0r.css';
import '../../css/e/e6oabcccq.css';
import '../../css/b/b-u1zwncm.css';
import '../../css/x/x9ifspt2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGZDnmycqd"><path class="ju-jy_b8z"/></clipPath></defs><g clip-path="url(#SVGZDnmycqd)" transform="translate(-90)scale(1.0535)" class="sx_geyq0r"><path class="e6oabcccq"/><path class="b-u1zwncm"/><path class="x9ifspt2k"/></g>`,
		"fallback": "flag:is-1x1",
	});
}

export default Component;
