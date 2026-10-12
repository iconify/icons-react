import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmvf9hbln.css';
import '../../css/s/sigei6ulc.css';
import '../../css/x/xui3uacmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmvf9hbln"/><path class="sigei6ulc"/><path class="xui3uacmw"/></g>`,
		"fallback": "lucide-extended:mail-minus-duotone",
	});
}

export default Component;
