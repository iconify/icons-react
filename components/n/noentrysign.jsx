import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm_2r6lbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm_2r6lbw"/>`,
		"fallback": "fxemoji:noentrysign",
	});
}

export default Component;
