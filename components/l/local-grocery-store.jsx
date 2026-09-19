import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afo943bic.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afo943bic"/>`,
		"fallback": "zmdi:local-grocery-store",
	});
}

export default Component;
