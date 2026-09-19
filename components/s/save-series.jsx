import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnlnjbcmb.css';
import '../../css/o/ozxr3zrwe.css';
import '../../css/j/j-_c-dbxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnlnjbcmb"/><path class="ozxr3zrwe"/><path class="j-_c-dbxp"/>`,
		"fallback": "carbon:save-series",
	});
}

export default Component;
