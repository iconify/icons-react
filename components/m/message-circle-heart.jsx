import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gowtob5ay.css';
import '../../css/t/tnssx_b0t.css';
import '../../css/z/z_nuy_bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gowtob5ay"/><path class="tnssx_b0t"/><path class="z_nuy_bbs"/></g>`,
		"fallback": "withicons-bauhaus:message-circle-heart",
	});
}

export default Component;
