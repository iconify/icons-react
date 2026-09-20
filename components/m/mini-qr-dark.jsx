import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkvb5p1nl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkvb5p1nl"/>`,
		"fallback": "selfhst:mini-qr-dark",
	});
}

export default Component;
