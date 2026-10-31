import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3xz25j2v.css';
import '../../css/f/f3gmv0u5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="f3xz25j2v"/><path class="f3gmv0u5y"/></g>`,
		"fallback": "struq:view-details",
	});
}

export default Component;
