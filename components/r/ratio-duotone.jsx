import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjch7lbxz.css';
import '../../css/c/cj2g5-b5u.css';
import '../../css/p/p4i9s3b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjch7lbxz"/><path class="cj2g5-b5u"/><path clip-rule="evenodd" class="p4i9s3b2r"/></g>`,
		"fallback": "lucide-extended:ratio-duotone",
	});
}

export default Component;
