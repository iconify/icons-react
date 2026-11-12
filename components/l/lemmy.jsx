import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfth_183n.css';
import '../../css/h/h4y9kdbyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfth_183n"/><path class="h4y9kdbyo"/>`,
		"fallback": "selfhst:lemmy",
	});
}

export default Component;
