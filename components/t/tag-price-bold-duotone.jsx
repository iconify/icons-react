import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffpdv241p.css';
import '../../css/g/gk_jpucvn.css';
import '../../css/a/ayh926r5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffpdv241p"/><path class="gk_jpucvn"/><path class="ayh926r5c"/>`,
		"fallback": "solar:tag-price-bold-duotone",
	});
}

export default Component;
