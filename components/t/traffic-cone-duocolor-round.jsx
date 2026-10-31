import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a517a_nqs.css';
import '../../css/a/as6fsnbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a517a_nqs"/><path class="as6fsnbrg"/></g>`,
		"fallback": "coolicons:traffic-cone-duocolor-round",
	});
}

export default Component;
