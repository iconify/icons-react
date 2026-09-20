import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhc-wtc2y.css';
import '../../css/p/phf4gf3fs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhc-wtc2y"/><path class="phf4gf3fs"/>`,
		"fallback": "selfhst:sendgrid-dark",
	});
}

export default Component;
