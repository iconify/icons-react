import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rchai1cmp.css';
import '../../css/s/s3ky36u6z.css';
import '../../css/l/l_ewoj67y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rchai1cmp wm-k"/><path class="s3ky36u6z wm-s"/><path class="l_ewoj67y"/></g>`,
		"fallback": "withicons-bauhaus:kite",
	});
}

export default Component;
