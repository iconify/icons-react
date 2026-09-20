import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn0_nldrm.css';
import '../../css/m/mxu_p1jge.css';
import '../../css/p/p6xe6zmnr.css';
import '../../css/c/c0lvt3b5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn0_nldrm"/><path class="mxu_p1jge"/><path class="p6xe6zmnr"/><path class="c0lvt3b5s"/>`,
		"fallback": "selfhst:vmware-workstation-pro",
	});
}

export default Component;
