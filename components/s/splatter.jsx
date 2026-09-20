import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptgkkvq3k.css';
import '../../css/a/ayeb2h67y.css';
import '../../css/f/f9bro21bv.css';
import '../../css/a/at_tg2jla.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptgkkvq3k"/><path class="ayeb2h67y"/><path class="f9bro21bv"/><path class="at_tg2jla"/>`,
		"fallback": "openmoji:splatter",
	});
}

export default Component;
