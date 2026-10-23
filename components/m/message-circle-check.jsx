import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3m46nx7n.css';
import '../../css/m/my1bm1ecp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3m46nx7n"/><path class="my1bm1ecp"/></g>`,
		"fallback": "vadivam:message-circle-check",
	});
}

export default Component;
