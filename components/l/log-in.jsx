import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8rxw_b0f.css';
import '../../css/y/yw-yhjbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d8rxw_b0f"/><path class="yw-yhjbdn"/></g>`,
		"fallback": "struq:log-in",
	});
}

export default Component;
