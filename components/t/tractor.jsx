import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yfxj_iryg.css';
import '../../css/q/q9whx4slr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yfxj_iryg"/><path class="q9whx4slr"/></g>`,
		"fallback": "vadivam:tractor",
	});
}

export default Component;
