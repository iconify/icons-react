import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhxnxnbrp.css';
import '../../css/s/s94jdif4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jhxnxnbrp"/><path class="s94jdif4v"/></g>`,
		"fallback": "keyline-icons:mic-off-fill",
	});
}

export default Component;
