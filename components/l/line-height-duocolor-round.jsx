import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8i27cbmn.css';
import '../../css/b/b2_xccbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o8i27cbmn"/><path class="b2_xccbks"/></g>`,
		"fallback": "coolicons:line-height-duocolor-round",
	});
}

export default Component;
