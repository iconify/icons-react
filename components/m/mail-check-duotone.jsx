import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lchpdvb_j.css';
import '../../css/s/sigei6ulc.css';
import '../../css/y/yfk_enb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lchpdvb_j"/><path class="sigei6ulc"/><path class="yfk_enb6u"/></g>`,
		"fallback": "lucide-extended:mail-check-duotone",
	});
}

export default Component;
