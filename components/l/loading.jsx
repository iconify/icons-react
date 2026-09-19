import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf-3mxbdo.css';
import '../../css/e/enhfi_bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf-3mxbdo"/><path class="enhfi_bcu"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path>`,
		"fallback": "eos-icons:loading",
	});
}

export default Component;
