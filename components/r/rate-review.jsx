import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar_sh6b-t.css';

const viewBox = {"width":408,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar_sh6b-t"/>`,
		"fallback": "zmdi:rate-review",
	});
}

export default Component;
