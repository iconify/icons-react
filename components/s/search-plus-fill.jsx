import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmx9-c4kv.css';
import '../../css/x/xexl16bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="nmx9-c4kv"/><path class="xexl16bfr"/></g>`,
		"fallback": "keyline-icons:search-plus-fill",
	});
}

export default Component;
