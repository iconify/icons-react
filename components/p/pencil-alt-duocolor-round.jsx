import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w-h6ynb5v.css';
import '../../css/l/liwe7bcrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w-h6ynb5v"/><path class="liwe7bcrx"/></g>`,
		"fallback": "coolicons:pencil-alt-duocolor-round",
	});
}

export default Component;
