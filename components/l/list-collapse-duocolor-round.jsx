import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ye2-fvvej.css';
import '../../css/b/b2_xccbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ye2-fvvej"/><path class="b2_xccbks"/></g>`,
		"fallback": "coolicons:list-collapse-duocolor-round",
	});
}

export default Component;
