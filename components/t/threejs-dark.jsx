import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/p/p7qm7vb8b.css';
import '../../css/p/p9gehxb2g.css';
import '../../css/y/y1rr_bcie.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="p7qm7vb8b"/><path clip-rule="evenodd" class="p9gehxb2g"/><path clip-rule="evenodd" class="y1rr_bcie"/></g>`,
		"fallback": "skill-icons:threejs-dark",
	});
}

export default Component;
