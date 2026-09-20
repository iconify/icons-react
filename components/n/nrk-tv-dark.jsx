import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-qr9ac1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-qr9ac1f"/>`,
		"fallback": "selfhst:nrk-tv-dark",
	});
}

export default Component;
