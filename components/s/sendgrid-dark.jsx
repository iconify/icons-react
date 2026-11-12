import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6wtytb_v.css';
import '../../css/p/phf4gf3fs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6wtytb_v"/><path class="phf4gf3fs"/>`,
		"fallback": "selfhst:sendgrid-dark",
	});
}

export default Component;
