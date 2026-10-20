import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzoimlb-v.css';
import '../../css/p/pemqbc__o.css';
import '../../css/p/p3q4orbqm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzoimlb-v"/><path class="pemqbc__o"/><path class="p3q4orbqm"/>`,
		"fallback": "energy-icons:passkey-20",
	});
}

export default Component;
