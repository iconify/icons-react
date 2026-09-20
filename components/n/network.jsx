import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wxe2_ouwj.css';
import '../../css/t/tx6wwib6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wxe2_ouwj"/><path class="tx6wwib6k"/></g>`,
		"fallback": "tabler:network",
	});
}

export default Component;
