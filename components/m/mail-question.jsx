import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lluzddczp.css';
import '../../css/v/v8ph01bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lluzddczp"/><path class="v8ph01bah"/></g>`,
		"fallback": "lucide:mail-question",
	});
}

export default Component;
